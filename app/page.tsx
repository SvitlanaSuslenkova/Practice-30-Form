"use client";
import styles from "./page.module.css";
import { useState, useEffect, Suspense } from "react";
import { fetchData } from "./apiData";
import { IFlags } from "./components/Types";
import { useRouter, useSearchParams } from "next/navigation";
import SearchInput from "./components/SearchInput/SearchInput";
import Filter from "./components/Filter/Filter";
import CardList from "./components/CardList/CardList";
import Loading from "./components/Loading/Loading";
import { Iquery } from "./components/Types";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState<IFlags[] | undefined>();
  const [filteredData, setFilteredData] = useState<IFlags[] | undefined>();
  const [namefilteredData, setNamefilteredData] = useState<
    IFlags[] | undefined
  >();
  const [nameFilter, setNameFilter] = useState<string>(
    searchParams.get("nameFilter") || ""
  );
  const [filteredregion, setFilteredregion] = useState<string>(
    searchParams.get("filteredregion") || ""
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOurData() {
      try {
        const gotdata: IFlags[] | undefined = await fetchData();

        setData(gotdata);
        if (gotdata !== null) {
          setFilteredData(gotdata);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      }
    }
    fetchOurData();
  }, []);

  useEffect(() => {
    const query: Iquery = {
      nameFilter: nameFilter || null,
      filteredregion: filteredregion || null,
    };

    const newUrl = new URL(window.location.href);
    (Object.keys(query) as (keyof Iquery)[]).forEach((key: keyof Iquery) => {
      if (query[key]) {
        newUrl.searchParams.set(key, query[key] as string);
      } else {
        newUrl.searchParams.delete(key);
      }
    });
    router.push(newUrl.toString(), { shallow: true } as NavigateOptions);
  }, [nameFilter, filteredregion, router]);

  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.searchAndFilterContainer}>
            <Suspense fallback={<div>Loading...</div>}>
              <SearchInput
                placeholder="Search for a country..."
                filteredData={filteredData}
                setNamefilteredData={setNamefilteredData}
                nameFilter={nameFilter}
                setNameFilter={setNameFilter}
              />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <Filter
                setFilteredData={setFilteredData}
                data={data}
                filteredData={filteredData}
                filteredregion={filteredregion}
                setFilteredregion={setFilteredregion}
              />
            </Suspense>
          </div>
          <Suspense fallback={<Loading />}>
            <>
              {error && (
                <p
                  style={{ color: "red", marginTop: "80px", fontSize: "20px" }}
                >
                  {error}
                </p>
              )}
              <CardList
                nameFilter={nameFilter}
                filteredregion={filteredregion}
                data={data}
                filteredData={filteredData}
                namefilteredData={namefilteredData}
              />
            </>
          </Suspense>
        </div>
      </main>
    </>
  );
}

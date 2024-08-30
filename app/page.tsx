import dynamic from "next/dynamic";
import Loading from "./components/Loading/Loading";

// Dynamically import the ClientComponent with SSR disabled
const Homepage = dynamic(() => import("./components/Mainpage/Mainpage"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <>
      <Homepage />
    </>
  );
}

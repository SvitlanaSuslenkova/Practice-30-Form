"use client";
import React from "react";
import styles from "./StepFour.module.css";
import stylesB from "../Mainpage/NextBackButtons.module.css";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

interface IStepFour {
  setStepThree: (stepThree: boolean) => void;
  setStepFour: (stepFour: boolean) => void;
  activePlan: string;
  setActivePlan: (activePlan: string) => void;
  term: string;
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
  priceOfPlan: number;
  onlineServicePrice: number;
  largerStoragePrice: number;
  customizableProfilePrice: number;
  setThankYou: (thankYou: boolean) => void;
}

const StepFour: React.FC<IStepFour> = ({
  setStepThree,
  setStepFour,
  activePlan,
  setActivePlan,
  term,
  onlineService,
  largerStorage,
  customizableProfile,
  priceOfPlan,
  onlineServicePrice,
  largerStoragePrice,
  customizableProfilePrice,
  setThankYou,
}) => {
  const {
    formState: { errors },
    setValue,
  } = useFormContext();

  const [changeDiv, setChangeDiv] = useState(false);
  const plans = ["arcade", "advanced", "pro"];
  const restPlans = plans.filter((plan: string) => plan !== activePlan);

  let osP = 0;
  let lsP = 0;
  let cpP = 0;
  if (onlineService) {
    osP = onlineServicePrice;
  }
  if (largerStorage) {
    lsP = largerStoragePrice;
  }
  if (customizableProfile) {
    cpP = customizableProfilePrice;
  }
  const totalSum = priceOfPlan + osP + lsP + cpP;

  const handleConfirm = () => {
    setStepFour(false);
    setThankYou(true);
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h1>Finishing up</h1>
        <h2>Double-check everything looks OK before confirming.</h2>
        <div className={styles.detailsContainer}>
          <div className={styles.planContainer}>
            <p className={styles.plan}>
              {`${activePlan.slice(0, 1).toUpperCase()}${activePlan.slice(1)} `}
              {term == "year" ? "(Yearly)" : "(Monthly)"}
            </p>
            <p className={styles.planPrice}>
              {term == "year"
                ? `$${priceOfPlan * 10}/yr`
                : `$${priceOfPlan}/mo`}
            </p>
            <button
              className={styles.changeButton}
              onClick={() => setChangeDiv(!changeDiv)}
            >
              Change
            </button>
            {changeDiv && (
              <div className={styles.changeButtonsDiv}>
                {restPlans.map((plan) => (
                  <button
                    key={plan}
                    className={styles.changeButtonsNew}
                    onClick={() => {
                      setActivePlan(plan);
                      setValue("plan", plan);
                    }}
                  >
                    {`${plan.slice(0, 1).toUpperCase()}${plan.slice(1)}`}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className={styles.divider}></div>
          <div onClick={() => setChangeDiv(false)}>
            {onlineService && (
              <p className={styles.services}>
                Online service{" "}
                <span>
                  {term == "year"
                    ? `+$${onlineServicePrice * 10}/yr`
                    : `+$${onlineServicePrice}/mo`}
                </span>
              </p>
            )}
            {largerStorage && (
              <p className={styles.services}>
                Larger Storage{" "}
                <span>
                  {term == "year"
                    ? `+$${largerStoragePrice * 10}/yr`
                    : `+$${largerStoragePrice}/mo`}
                </span>
              </p>
            )}
            {customizableProfile && (
              <p className={styles.services}>
                Customizable Profile{" "}
                <span>
                  {term == "year"
                    ? `+$${customizableProfilePrice * 10}/yr`
                    : `+$${customizableProfilePrice}/mo`}
                </span>
              </p>
            )}
          </div>
        </div>
        <p className={styles.total}>
          Total ({term == "year" ? "per year" : "per month"})
          <span>
            {term == "year" ? `$${totalSum * 10}/yr` : `$${totalSum}/mo`}
          </span>
        </p>
      </div>
      <footer className={stylesB.footerContainer}>
        <button
          className={stylesB.goBackButton}
          onClick={() => {
            setStepFour(false);
            setStepThree(true);
          }}
        >
          Go Back
        </button>
        <button
          type="button"
          className={stylesB.nextStepButton}
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </footer>
    </>
  );
};

export default StepFour;

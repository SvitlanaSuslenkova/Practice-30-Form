"use client";
import React from "react";
import styles from "./NumbersOfSteps.module.css";
//import { useNextHandler } from "../Mainpage/checkStepOne";
import { useFormContext } from "react-hook-form";
//import { checkStepOne } from "../Mainpage/checkStepOne";
import { useState } from "react";

interface INumbersOfSteps {
  stepOne: boolean;
  setStepOne: (stepOne: boolean) => void;
  stepTwo: boolean;
  setStepTwo: (stepTwo: boolean) => void;
  stepThree: boolean;
  setStepThree: (stepThree: boolean) => void;
  stepFour: boolean;
  setStepFour: (stepFour: boolean) => void;
  setStepOneDone: (stepFour: boolean) => void;
  thankYou: boolean;
}

const NumbersOfSteps: React.FC<INumbersOfSteps> = ({
  stepOne,
  setStepOne,
  stepTwo,
  setStepTwo,
  stepThree,
  setStepThree,
  stepFour,
  setStepFour,
  setStepOneDone,
  thankYou,
}): JSX.Element => {
  const {
    // getValues,
    trigger,
    formState: { errors },
  } = useFormContext();

  const [disabled, setDisabled] = useState(false);

  function hasErrors() {
    setStepOneDone(false);
    setDisabled(true);
  }
  function noErrors() {
    setDisabled(false);
    setStepOneDone(true);
  }

  const stepOneOn = () => {
    setStepOne(true);
    setStepTwo(false);
    setStepThree(false);
    setStepFour(false);
  };
  const stepTwoOn = async () => {
    const t = await trigger();
    if (t) {
      if (errors.name || errors.email || errors.phone) {
        hasErrors();
      } else {
        noErrors();
        setStepOne(false);
        setStepTwo(true);
        setStepThree(false);
        setStepFour(false);
      }
    }
  };
  const stepThreeOn = async () => {
    const t = await trigger();
    if (t) {
      if (errors.name || errors.email || errors.phone) {
        hasErrors();
      } else {
        noErrors();
        setStepOne(false);
        setStepTwo(false);
        setStepThree(true);
        setStepFour(false);
      }
    }
  };
  const stepFourOn = async () => {
    const t = await trigger();
    if (t) {
      if (errors.name || errors.email || errors.phone) {
        hasErrors();
      } else {
        noErrors();
        setStepOne(false);
        setStepTwo(false);
        setStepThree(false);
        setStepFour(true);
      }
    }
  };

  return (
    <div className={styles.NumbersOfStepsDiv}>
      <button
        type="button"
        className={stepOne ? styles.numberButtonOn : styles.numberButton}
        onClick={stepOneOn}
        disabled={thankYou ? true : false}
      >
        1
      </button>
      <div className={styles.desktopButtonNames}>
        <p className={styles.desktopButtonNameStep}>Step 1</p>
        <p className={styles.desktopButtonNameP}>Your info</p>
      </div>
      <button
        type="button"
        className={stepTwo ? styles.numberButtonOn : styles.numberButton}
        onClick={stepTwoOn}
        disabled={thankYou ? true : disabled}
      >
        2
      </button>
      <div className={styles.desktopButtonNames}>
        <p className={styles.desktopButtonNameStep}>Step 2</p>
        <p className={styles.desktopButtonNameP}>Select Plan</p>
      </div>
      <button
        type="button"
        className={stepThree ? styles.numberButtonOn : styles.numberButton}
        onClick={stepThreeOn}
        disabled={thankYou ? true : disabled}
      >
        3
      </button>
      <div className={styles.desktopButtonNames}>
        <p className={styles.desktopButtonNameStep}>Step 3</p>
        <p className={styles.desktopButtonNameP}>Add-ons</p>
      </div>
      <button
        type="button"
        className={stepFour ? styles.numberButtonOn : styles.numberButton}
        onClick={stepFourOn}
        disabled={thankYou ? true : disabled}
      >
        4
      </button>
      <div className={styles.desktopButtonNames}>
        <p className={styles.desktopButtonNameStep}>Step 4</p>
        <p className={styles.desktopButtonNameP}>Summary</p>
      </div>
    </div>
  );
};

export default NumbersOfSteps;

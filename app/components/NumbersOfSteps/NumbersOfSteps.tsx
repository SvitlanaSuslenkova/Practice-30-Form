'use client';
import React from 'react';
import styles from './NumbersOfSteps.module.css';
//import { useNextHandler } from "../Mainpage/checkStepOne";
import { useFormContext } from 'react-hook-form';
//import { checkStepOne } from "../Mainpage/checkStepOne";
import { useState } from 'react';

interface INumbersOfSteps {
  step: 1 | 2 | 3 | 4 | 5;
  setStep: (step: 1 | 2 | 3 | 4 | 5) => void;
}

const NumbersOfSteps: React.FC<INumbersOfSteps> = ({
  step,
  setStep,
}): JSX.Element => {
  const {
    // getValues,
    trigger,
    formState: { errors },
  } = useFormContext();

  const [disabled, setDisabled] = useState(false);

  function hasErrors() {
    setDisabled(true);
  }
  function noErrors() {
    setDisabled(false);
  }

  const stepOneOn = () => {
    setStep(1);
  };
  const stepTwoOn = async () => {
    const t = await trigger();
    if (t) {
      if (errors.name || errors.email || errors.phone) {
        hasErrors();
      } else {
        noErrors();
        setStep(2);
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
        setStep(3);
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
        setStep(4);
      }
    }
  };

  return (
    <div className={styles.NumbersOfStepsDiv}>
      <button
        type="button"
        className={step == 1 ? styles.numberButtonOn : styles.numberButton}
        onClick={stepOneOn}
        disabled={step == 5 ? true : false}
      >
        1
      </button>
      <div className={styles.desktopButtonNames}>
        <p className={styles.desktopButtonNameStep}>Step 1</p>
        <p className={styles.desktopButtonNameP}>Your info</p>
      </div>
      <button
        type="button"
        className={step == 2 ? styles.numberButtonOn : styles.numberButton}
        onClick={stepTwoOn}
        disabled={step == 5 ? true : disabled}
      >
        2
      </button>
      <div className={styles.desktopButtonNames}>
        <p className={styles.desktopButtonNameStep}>Step 2</p>
        <p className={styles.desktopButtonNameP}>Select Plan</p>
      </div>
      <button
        type="button"
        className={step == 3 ? styles.numberButtonOn : styles.numberButton}
        onClick={stepThreeOn}
        disabled={step == 5 ? true : disabled}
      >
        3
      </button>
      <div className={styles.desktopButtonNames}>
        <p className={styles.desktopButtonNameStep}>Step 3</p>
        <p className={styles.desktopButtonNameP}>Add-ons</p>
      </div>
      <button
        type="button"
        className={step == 4 ? styles.numberButtonOn : styles.numberButton}
        onClick={stepFourOn}
        disabled={step == 5 ? true : disabled}
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

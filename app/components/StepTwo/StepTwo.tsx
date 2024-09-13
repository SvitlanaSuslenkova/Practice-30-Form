'use client';
import React from 'react';
import { useEffect } from 'react';
import styles from './StepTwo.module.css';
import Image from 'next/image';
import InputCheckBox from './InputCheckBox/InputCheckbox';
import stylesB from '../Mainpage/NextBackButtons.module.css';
import { useFormContext } from 'react-hook-form';

interface IStepTwo {
  setStep: (step: 1 | 2 | 3 | 4 | 5) => void;
  activePlan: string;
  setActivePlan: (activePlan: string) => void;
  term: string;
  setTerm: (term: string) => void;
  arcadePrice: number;
  advancedPrice: number;
  proPrice: number;
}

const StepTwo: React.FC<IStepTwo> = ({
  setStep,
  activePlan,
  setActivePlan,
  term,
  setTerm,
  arcadePrice,
  advancedPrice,
  proPrice,
}) => {
  const {
    setValue,
    //getValues,
    //trigger,
  } = useFormContext();

  function handleSelectPlan(value: string) {
    setActivePlan(value);
  }

  useEffect(() => {
    setValue('plan', activePlan);
  }, [activePlan]);

  const handleTerm = () => {
    if (term == 'year') {
      setTerm('month');
      setValue('term', 'month');
    } else {
      setTerm('year');
      setValue('term', 'year');
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h1>Select your plan</h1>
        <h2>You have the option of monthly or yearly billing.</h2>
        <div className={styles.desktopButtonsContainer}>
          <button
            className={
              activePlan == 'arcade'
                ? `${styles.activeButton}`
                : `${styles.planButton}`
            }
            onClick={() => handleSelectPlan('arcade')}
            value="arcade"
          >
            <Image
              className={styles.buttonImage}
              src="/icon-arcade.svg"
              alt="arcade"
              width={40}
              height={40}
              onClick={() => handleSelectPlan('arcade')}
            ></Image>
            <div>
              <p className={styles.buttonName}>Arcade</p>
              <p className={styles.buttonPrice}>
                {term == 'year'
                  ? `$${arcadePrice * 10} / yr`
                  : `$${arcadePrice} / mo`}
              </p>
              <p className={styles.twoMonthsFree}>
                {term == 'year' && `2 months free`}
              </p>
            </div>
          </button>
          <button
            className={
              activePlan == 'advanced'
                ? `${styles.activeButton}`
                : `${styles.planButton}`
            }
            onClick={() => handleSelectPlan('advanced')}
            value="advanced"
          >
            <Image
              className={styles.buttonImage}
              src="/icon-advanced.svg"
              alt="advanced"
              width={40}
              height={40}
              onClick={() => handleSelectPlan('advanced')}
            ></Image>
            <div>
              <p className={styles.buttonName}>Advanced</p>
              <p className={styles.buttonPrice}>
                {term == 'year'
                  ? `$${advancedPrice * 10}/ yr`
                  : `$${advancedPrice} / mo`}
              </p>
              <p className={styles.twoMonthsFree}>
                {term == 'year' && `2 months free`}
              </p>
            </div>
          </button>

          <button
            className={
              activePlan == 'pro'
                ? `${styles.activeButton}`
                : `${styles.planButton}`
            }
            onClick={() => handleSelectPlan('pro')}
            value="pro"
          >
            <Image
              className={styles.buttonImage}
              src="/icon-pro.svg"
              alt="pro"
              width={40}
              height={40}
              onClick={() => handleSelectPlan('pro')}
            ></Image>
            <div>
              <p className={styles.buttonName}>Pro</p>
              <p className={styles.buttonPrice}>
                {term == 'year'
                  ? `$${proPrice * 10} / yr`
                  : `$${proPrice} / mo`}
              </p>
              <p className={styles.twoMonthsFree}>
                {term == 'year' && `2 months free`}
              </p>
            </div>
          </button>
        </div>
        <div className={styles.monthYearDivContainer}>
          <div className={styles.monthYearDiv}>
            <p
              className={
                term !== 'year' ? `${styles.selectedMonthYearText}` : ''
              }
            >
              Monthly
            </p>
            <InputCheckBox id="monthOrYear" onClick={handleTerm} term={term} />
            <p
              className={
                term == 'year' ? `${styles.selectedMonthYearText}` : ''
              }
            >
              Yearly
            </p>
          </div>
        </div>
      </div>

      <footer className={stylesB.footerContainer}>
        <button className={stylesB.goBackButton} onClick={() => setStep(1)}>
          Go Back
        </button>
        <button className={stylesB.nextStepButton} onClick={() => setStep(3)}>
          Next Step
        </button>
      </footer>
    </>
  );
};

export default StepTwo;

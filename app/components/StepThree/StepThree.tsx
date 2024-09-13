'use client';
import React from 'react';
import styles from './StepThree.module.css';
import InputCheckbox from './InputCheckbox/InputCheckbox';
import stylesB from '../Mainpage/NextBackButtons.module.css';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

interface IStepThree {
  setStep: (step: 1 | 2 | 3 | 4 | 5) => void;
  onlineService: boolean;
  setOnlineService: (onlineService: boolean) => void;
  largerStorage: boolean;
  setLargerStorage: (largerStorage: boolean) => void;
  customizableProfile: boolean;
  setCustomizableProfile: (customizableProfile: boolean) => void;
  term: string;
  onlineServicePrice: number;
  largerStoragePrice: number;
  customizableProfilePrice: number;
}

const StepThree: React.FC<IStepThree> = ({
  setStep,
  onlineService,
  setOnlineService,
  largerStorage,
  setLargerStorage,
  customizableProfile,
  setCustomizableProfile,
  term,
  onlineServicePrice,
  largerStoragePrice,
  customizableProfilePrice,
}) => {
  const { setValue } = useFormContext();

  const handleChange = (data: string) => {
    if (data == 'onlineService') {
      setOnlineService(!onlineService);
    } else if (data == 'largerStorage') {
      setLargerStorage(!largerStorage);
    } else if (data == 'customizableProfile') {
      setCustomizableProfile(!customizableProfile);
    }
  };

  useEffect(() => {
    setValue('onlineService', onlineService);
    setValue('largerStorage', largerStorage);
    setValue('customizableProfile', customizableProfile);
  }, [onlineService, largerStorage, customizableProfile]);

  return (
    <>
      <div className={styles.formContainer}>
        <h1>Pick add-ons</h1>
        <h2>Add-ons help enhance your gaming experience.</h2>

        <button
          className={
            onlineService
              ? styles.activeStepThreebutton
              : styles.stepThreebutton
          }
          onClick={() => handleChange('onlineService')}
        >
          <InputCheckbox defaultChecked={onlineService} id="onlineService" />
          <div>
            <p className={styles.buttonName}>Online service</p>
            <p className={styles.buttonDescription}>
              Access to multiplayer games
            </p>
          </div>
          <p className={styles.buttonPrice}>
            {term == 'month'
              ? `+$${onlineServicePrice}/mo`
              : `+$${onlineServicePrice * 10}/yr`}
          </p>
        </button>
        <button
          className={
            largerStorage
              ? styles.activeStepThreebutton
              : styles.stepThreebutton
          }
          onClick={() => handleChange('largerStorage')}
        >
          <InputCheckbox defaultChecked={largerStorage} id="largerStorage" />
          <div>
            <p className={styles.buttonName}>Larger storage</p>
            <p className={styles.buttonDescription}>Extra 1TB of cloud save</p>
          </div>
          <p className={styles.buttonPrice}>
            {term == 'month'
              ? `+$${largerStoragePrice}/mo`
              : `+$${largerStoragePrice * 10}/yr`}
          </p>
        </button>
        <button
          className={
            customizableProfile
              ? styles.activeStepThreebutton
              : styles.stepThreebutton
          }
          onClick={() => handleChange('customizableProfile')}
        >
          <InputCheckbox
            defaultChecked={customizableProfile}
            id="customizableProfile"
          />
          <div>
            <p className={styles.buttonName}>Customizable Profile</p>
            <p className={styles.buttonDescription}>
              Custom theme on your profile
            </p>
          </div>
          <p className={styles.buttonPrice}>
            {term == 'month'
              ? `+$${customizableProfilePrice}/mo`
              : `+$${customizableProfilePrice * 10}/yr`}
          </p>
        </button>
      </div>
      <footer className={stylesB.footerContainer}>
        <button className={stylesB.goBackButton} onClick={() => setStep(2)}>
          Go Back
        </button>
        <button className={stylesB.nextStepButton} onClick={() => setStep(4)}>
          Next Step
        </button>
      </footer>
    </>
  );
};

export default StepThree;

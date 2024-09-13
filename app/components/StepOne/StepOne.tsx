'use client';
import React, { useState } from 'react';
import styles from './StepOne.module.css';
import stylesB from '../Mainpage/NextBackButtons.module.css';
import { useFormContext } from 'react-hook-form';

interface IStepOne {
  setStep: (step: 1 | 2 | 3 | 4 | 5) => void;
}

const StepOne: React.FC<IStepOne> = ({ setStep }) => {
  //const multipleValues = getValues(["name", "email", "phone"]);

  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();
  const [disabled, setDisabled] = useState(false);

  async function nextHandler() {
    const t = await trigger();
    if (t) {
      if (errors.name || errors.email || errors.phone) {
        setDisabled(true);
      } else {
        setDisabled(false);
        setStep(2);
      }
    }
  }

  return (
    <>
      <div className={styles.formContainer}>
        <h1>Personal info</h1>
        <h2>Please provide your name, email address, and phone number.</h2>

        <div className={styles.formStepOne}>
          <div className={styles.labelAndInput}>
            <div className={styles.labelAndErrorDiv}>
              <label htmlFor="name">Name</label>
              {errors.name && (
                <p className={styles.errorText}>
                  {errors.name.message as string}
                </p>
              )}
            </div>
            <input
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              {...register('name', {
                required: 'Name cannot be empty',
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Name must contain only letters',
                },
                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 characters',
                },
                maxLength: {
                  value: 30,
                  message: 'Name must be less than 30 characters',
                },
              })}
            />
          </div>

          <div className={styles.labelAndInput}>
            <div className={styles.labelAndErrorDiv}>
              <label htmlFor="email">Email Address</label>
              {errors.email && (
                <p className={styles.errorText}>
                  {errors.email.message as string}
                </p>
              )}
            </div>
            <input
              type="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              {...register('email', {
                required: 'Email cannot be empty',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address',
                },
                maxLength: {
                  value: 30,
                  message: 'Email address must be less than 30 characters',
                },
              })}
            />
          </div>

          <div className={styles.labelAndInput}>
            <div className={styles.labelAndErrorDiv}>
              <label htmlFor="phone">Phone Number</label>
              {errors.phone && (
                <p className={styles.errorText}>
                  {errors.phone.message as string}.
                </p>
              )}
            </div>
            <input
              type="text"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              {...register('phone', {
                required: 'Phone number cannot be empty',
                pattern: {
                  value: /^[+]?[0-9]{10,15}$/,
                  message:
                    'Please enter a valid phone number (+ and 10 numbers)',
                },
                minLength: {
                  value: 11,
                  message: 'Must contain + and 10 numbers ',
                },
                maxLength: {
                  value: 11,
                  message: 'Phone number must contain + and 10 numbers ',
                },
              })}
            />
          </div>
        </div>
      </div>
      <footer className={stylesB.footerContainer}>
        <button
          disabled={disabled}
          type="button"
          className={stylesB.nextStepButton}
          onClick={() => {
            nextHandler();
          }}
        >
          Next Step
        </button>
      </footer>
    </>
  );
};

export default StepOne;

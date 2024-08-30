"use client";
import styles from "./Mainpage.module.css";
import { useEffect, useState } from "react";
import NumbersOfSteps from "../NumbersOfSteps/NumbersOfSteps";
import StepOne from "../StepOne/StepOne";
import StepTwo from "../StepTwo/StepTwo";
import StepThree from "../StepThree/StepThree";
import StepFour from "../StepFour/StepFour";
import ThankYou from "../TankYou/ThankYou";
import ChallengeBy from "../ChallengeBy";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
//npm install react-hook-form

interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: string;
  term: string;
  onlineService: string;
  largerStorage: string;
  customizableProfile: string;
}

const Mainpage = () => {
  /*Prices per month*/
  const arcadePrice = 9;
  const advancedPrice = 12;
  const proPrice = 15;
  const onlineServicePrice = 1;
  const largerStoragePrice = 2;
  const customizableProfilePrice = 2;

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      plan: "arcade",
      term: "month",
      onlineService: "false",
      largerStorage: "false",
      customizableProfile: "false",
    },
  });

  const { handleSubmit } = methods;

  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [stepFour, setStepFour] = useState(false);

  /*step 1*/
  const [stepOneDone, setStepOneDone] = useState(false);
  /*step 2*/
  const [activePlan, setActivePlan] = useState("arcade");

  const [priceOfPlan, setPriceOfPlan] = useState(arcadePrice);
  useEffect(() => {
    if (activePlan == "arcade") {
      setPriceOfPlan(arcadePrice);
    }
    if (activePlan == "advanced") {
      setPriceOfPlan(advancedPrice);
    }
    if (activePlan == "pro") {
      setPriceOfPlan(proPrice);
    }
  }, [activePlan]);

  const [term, setTerm] = useState("month");
  /*step 3*/
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);

  const formSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  /*thank you */
  const [thankYou, setThankYou] = useState(false);

  return (
    <main className={styles.mainpageDiv}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
          <div className={styles.numbersOfStepsMobile}>
            <NumbersOfSteps
              stepOne={stepOne}
              setStepOne={setStepOne}
              stepTwo={stepTwo}
              setStepTwo={setStepTwo}
              stepThree={stepThree}
              setStepThree={setStepThree}
              stepFour={stepFour}
              setStepFour={setStepFour}
              setStepOneDone={setStepOneDone}
              thankYou={thankYou}
            />
          </div>
          <div className={styles.formDiv}>
            <div className={styles.desktopImage}>
              <NumbersOfSteps
                stepOne={stepOne}
                setStepOne={setStepOne}
                stepTwo={stepTwo}
                setStepTwo={setStepTwo}
                stepThree={stepThree}
                setStepThree={setStepThree}
                stepFour={stepFour}
                setStepFour={setStepFour}
                setStepOneDone={setStepOneDone}
                thankYou={thankYou}
              />
            </div>
            {stepOne && (
              <StepOne
                setStepOne={setStepOne}
                setStepTwo={setStepTwo}
                setStepOneDone={setStepOneDone}
              />
            )}
            {stepTwo && (
              <StepTwo
                setStepOne={setStepOne}
                setStepTwo={setStepTwo}
                setStepThree={setStepThree}
                activePlan={activePlan}
                setActivePlan={setActivePlan}
                term={term}
                setTerm={setTerm}
                arcadePrice={arcadePrice}
                advancedPrice={advancedPrice}
                proPrice={proPrice}
              />
            )}

            {stepThree && (
              <StepThree
                setStepTwo={setStepTwo}
                setStepThree={setStepThree}
                setStepFour={setStepFour}
                onlineService={onlineService}
                setOnlineService={setOnlineService}
                largerStorage={largerStorage}
                setLargerStorage={setLargerStorage}
                customizableProfile={customizableProfile}
                setCustomizableProfile={setCustomizableProfile}
                term={term}
                onlineServicePrice={onlineServicePrice}
                largerStoragePrice={largerStoragePrice}
                customizableProfilePrice={customizableProfilePrice}
              />
            )}
            {stepFour && (
              <StepFour
                setStepThree={setStepThree}
                setStepFour={setStepFour}
                activePlan={activePlan}
                setActivePlan={setActivePlan}
                term={term}
                onlineService={onlineService}
                largerStorage={largerStorage}
                customizableProfile={customizableProfile}
                priceOfPlan={priceOfPlan}
                onlineServicePrice={onlineServicePrice}
                largerStoragePrice={largerStoragePrice}
                customizableProfilePrice={customizableProfilePrice}
                setThankYou={setThankYou}
              />
            )}
            {thankYou && <ThankYou />}
          </div>
        </form>
      </FormProvider>
      <ChallengeBy />
    </main>
  );
};

export default Mainpage;

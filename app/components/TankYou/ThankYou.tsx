import React from "react";
import styles from "./ThankYou.module.css";
import Image from "next/image";

const ThankYou = () => {
  return (
    <div className={styles.thankYouContainer}>
      <Image
        className={styles.iconThankYou}
        src="/icon-thank-you.svg"
        alt=""
        width={56}
        height={56}
      />
      <h1 style={{ textAlign: "center" }}>Thank you!</h1>
      <h2 style={{ textAlign: "center" }}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </h2>
    </div>
  );
};

export default ThankYou;

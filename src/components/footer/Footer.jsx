import React from "react";
import styles from "./footer.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footerContainer}>
        <div className={styles.iconsContainer}>
          <div className={styles.logoContainer}></div>
          <div className={styles.socialContainer}>
            <AiOutlineMail />
            <AiOutlineWhatsApp />
            <AiOutlineFacebook />
            <AiOutlineInstagram />
          </div>
        </div>
        <div className={styles.copyright}>
          <p>
            © 2023 MovieApp - All external content remains the property of the
            rightful owner.
          </p>
          <div />
        </div>
      </footer>
    </div>
  );
}

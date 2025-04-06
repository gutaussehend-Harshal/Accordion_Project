import React from "react";
import styles from "./LeadSummary.module.css";

const LeadSummary = () => {
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.leadInfo}>
        <h2>Jill Jones</h2>
        <p>Email: jill@gmail.com</p>
      </div>
      <div className={styles.leadSections}>
        <div className={styles.leadCard}>
          <h3>Original</h3>
          <p>Source: CarGurus</p>
          <p>Lead In: 30th January 2024</p>
          <p>Interested vehicle: 2023 Honda Civic</p>
          <p>Status: Lost</p>
        </div>
        <div className={styles.leadCard}>
          <h3>Revival</h3>
          <p>Source: Walk In</p>
          <p>Lead In: 23rd October 2024</p>
          <p>Interested vehicle: 2024 Honda Civic</p>
          <p>Status: Sold</p>
        </div>
      </div>
    </div>
  );
};

export default LeadSummary;

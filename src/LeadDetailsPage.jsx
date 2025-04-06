import React from "react";
import LeadSummary from "./components/LeadSummary";
import NurturingHistory from "./components/NurturingHistory";
import EmailAccordion from "./components/EmailAccordion";
import styles from "./LeadDetailsPage.module.css";

const LeadDetailsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Lead Details</h1>
      <LeadSummary />
      <NurturingHistory />
      <EmailAccordion />
    </div>
  );
};

export default LeadDetailsPage;

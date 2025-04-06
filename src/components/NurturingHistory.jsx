import React from "react";
import styles from "./NurturingHistory.module.css";

const NurturingHistory = () => {
  return (
    <div className={styles.historyContainer}>
      <h3>Jill Jones Nurturing History</h3>
      <ul className={styles.timeline}>
        <li>
          <strong>1st March 2024:</strong> myautoIQ nurturing starts - Buyer profile target - Now or like-new Honda Civic, Budget - $20-25k, reliability shopper, mid funnel buyer likely to buy in 120-150 days.
        </li>
        <li>...</li>
        <li>
          <strong>23rd October 2024:</strong> Jill came as a showroom-up lead for 2024 Honda Civic EX.
        </li>
        <li>
          <strong>23rd June 2024:</strong> Jill bought 2024 Honda Civic EX.
        </li>
      </ul>
    </div>
  );
};

export default NurturingHistory;

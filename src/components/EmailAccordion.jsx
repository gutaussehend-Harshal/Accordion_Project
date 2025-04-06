import React, { useState } from "react";
import styles from "./EmailAccordion.module.css";

const emails = [
  {
    id: 1,
    subject: "2025 Honda Pilot EX-L $459/Mo Lease*",
    sentOn: "07 Oct 2024 07:33 AM",
    status: "This message was not added to the lead activity.",
  },
  {
    id: 2,
    subject: "Re: 2025 Honda Pilot EX-L $459/Mo Lease*",
    sentOn: "15 Oct 2024 09:24 AM",
    status: "This message was not added to the lead activity.",
  },
  {
    id: 3,
    subject: "Like-New saving: 2022 Honda CR-V",
    sentOn: "27 Oct 2024 05:53 PM",
    status: "This message was not added to the lead activity.",
  },
  {
    id: 4,
    subject: "Re: Like-New saving: 2022 Honda CR-V",
    sentOn: "04 Nov 2024 07:50 AM",
    status: "This message was not added to the lead activity.",
  },
];

const EmailAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionContainer}>
      <h3>Email History</h3>
      {emails.map((email) => (
        <div key={email.id} className={styles.accordionItem}>
          <button
            onClick={() => toggle(email.id)}
            className={styles.accordionTitle}
          >
            {email.subject}
          </button>
          {openIndex === email.id && (
            <div className={styles.accordionContent}>
              <p>
                <strong>Sent On:</strong> {email.sentOn}
              </p>
              <p>
                <strong>Status:</strong> {email.status}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EmailAccordion;

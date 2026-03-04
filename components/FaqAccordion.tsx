"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "@/styles/faq.module.css";

export default function FaqAccordion({ faqs }) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className={styles.accordionGrid}>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                    <div className={styles.faqQuestion}>
                        <h3>{faq.question}</h3>
                        <div className={styles.chevron}>
                            <ChevronDown size={20} />
                        </div>
                    </div>
                    <div className={styles.faqAnswer}>
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "@/styles/faq.module.css";

export default function FaqAccordion({ faqs }) {
    const [openKey, setOpenKey] = useState("Privacy & Data-0");

    const toggleFaq = (key) => {
        setOpenKey(openKey === key ? null : key);
    };

    return (
        <div className={styles.accordionContainer}>
            {faqs.map((section, sectionIndex) => (
                <div key={sectionIndex} className={styles.faqSection}>
                    <h2 className={styles.sectionHeader}>{section.section}</h2>
                    <div className={styles.accordionGrid}>
                        {section.items.map((item, index) => {
                            const key = `${section.section}-${index}`;
                            const isOpen = openKey === key;
                            return (
                                <div
                                    key={index}
                                    className={`${styles.faqItem} ${isOpen ? styles.active : ""}`}
                                    onClick={() => toggleFaq(key)}
                                >
                                    <div className={styles.faqQuestion}>
                                        <h3>{item.question}</h3>
                                        <div className={styles.chevron}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </div>
                                    <div className={styles.faqAnswer}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}

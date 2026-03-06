import { HelpCircle } from "lucide-react";
import { faqs } from "@/data/faqs";
import styles from "@/styles/faq.module.css";
import FaqAccordion from "@/components/FaqAccordion";
import { EtherealShadow } from "@/components/ui/etheral-shadow";

export const metadata = {
    title: "FAQ — Cashiro",
    description: "Frequently asked questions about Cashiro's privacy, bank support, and features.",
};

export default function FAQPage() {
    return (
        <div className={styles.faqPage}>
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <EtherealShadow
                        color="rgba(255, 255, 255, 0.1)"
                        animation={{ scale: 40, speed: 20 }}
                        noise={{ opacity: 0.3, scale: 0.5 }}
                        sizing="fill"
                    />
                </div>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={styles.icon}>
                            <HelpCircle size={40} color="#00e5a0" />
                        </div>
                        <h1>Frequently Asked Questions</h1>
                        <p>Everything you need to know about Cashiro and your financial privacy.</p>
                    </div>
                </div>
                <div className={styles.scallopDivider}></div>
            </section>

            <section className={styles.faqList}>
                <div className="container">
                    <FaqAccordion faqs={faqs} />

                    <div className={styles.contactCta}>
                        <p>Still have questions? <a href="https://github.com/ritesh-kanwar/Cashiro/issues" target="_blank" rel="noopener noreferrer">Open an issue on GitHub</a></p>
                    </div>
                </div>
            </section>
        </div>
    );
}

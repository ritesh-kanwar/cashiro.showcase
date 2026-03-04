import { Shield, Lock, EyeOff } from "lucide-react";
import styles from "@/styles/legal.module.css";

export const metadata = {
    title: "Privacy Policy — Cashiro",
    description: "Learn how Cashiro protects your financial privacy with on-device processing.",
};

export default function PrivacyPage() {
    return (
        <div className={styles.legalPage}>
            <section className={styles.header}>
                <div className="container">
                    <div className={styles.headerContent}>
                        <h1>Privacy Policy</h1>
                        <p className={styles.lastUpdated}>Last Updated: March 2024</p>
                    </div>
                </div>
            </section>

            <section className={styles.content}>
                <div className="container">
                    <div className={styles.legalBody}>
                        <div className={styles.privacyHighlights}>
                            <div className={styles.highlightCard}>
                                <Shield size={24} color="#00e5a0" />
                                <h3>On-Device Processing</h3>
                                <p>All transaction parsing and secure regex-based insights happen locally on your phone.</p>
                            </div>
                            <div className={styles.highlightCard}>
                                <Lock size={24} color="#00e5a0" />
                                <h3>No Cloud Storage</h3>
                                <p>We do not have servers to store your financial data. It never leaves your device.</p>
                            </div>
                            <div className={styles.highlightCard}>
                                <EyeOff size={24} color="#00e5a0" />
                                <h3>Zero Analytics</h3>
                                <p>We don't use trackers or analytics to monitor how you use the app.</p>
                            </div>
                        </div>

                        <h2>1. Introduction</h2>
                        <p>Cashiro ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains our practices regarding the collection, use, and disclosure of your information when you use our mobile application.</p>

                        <h2>2. Information Collection</h2>
                        <p><strong>Financial Data:</strong> Cashiro reads your bank SMS to automatically track expenses. This data is processed entirely on your device. We do not collect, store, or transmit your financial data to any external servers.</p>
                        <p><strong>Personal Data:</strong> We do not require you to create an account or provide any personal information such as your name, email address, or phone number to use the app.</p>

                        <h2>3. Permissions</h2>
                        <p>Cashiro requires the following permissions to function:</p>
                        <ul>
                            <li><strong>SMS Permission:</strong> Read-only access to transaction messages. Only Bank SMS are processed; personal messages are never accessed or read. We do not modify or delete any messages.</li>
                            <li><strong>Storage/Media Permission:</strong> Used only when you choose to export data to CSV or import PDF statements.</li>
                        </ul>

                        <h2>4. Third-Party Services</h2>
                        <p>Cashiro is a standalone application and does not integrate with any third-party advertising or analytics networks.</p>

                        <h2>5. Changes to This Policy</h2>
                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>

                        <h2>6. Contact me</h2>
                        <p>If you have any questions about this Privacy Policy, you can reach out to us via our GitHub repository.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

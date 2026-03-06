import { Shield, Lock, EyeOff } from "lucide-react";
import { EtherealShadow } from "@/components/ui/etheral-shadow";
import styles from "@/styles/legal.module.css";

export const metadata = {
    title: "Privacy Policy — Cashiro",
    description: "Learn how Cashiro protects your financial privacy with on-device processing.",
};

export default function PrivacyPage() {
    return (
        <div className={styles.legalPage}>
            <section className={styles.header}>
                <div className={styles.heroBackground}>
                    <EtherealShadow
                        color="rgba(255, 255, 255, 0.1)"
                        animation={{ scale: 40, speed: 20 }}
                        noise={{ opacity: 0.3, scale: 0.5 }}
                        sizing="fill"
                    />
                </div>
                <div className="container">
                    <div className={styles.headerContent}>
                        <h1>Privacy Policy</h1>
                        <p className={styles.lastUpdated}>Last Updated: March 2026</p>
                    </div>
                </div>
                <div className={styles.scallopDivider}></div>
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

                        <h2>3. Analytics Collection</h2>
                        <p>We do not use analytics or advertising trackers. In some cases, your platform (such as the App Store or Google Play) may provide aggregated diagnostics such as crash reports, which can include device type, OS version, and app version.</p>

                        <h2>4. Data Integrity</h2>
                        <p>While we make every effort to maintain Data integrity, it's important to understand that we cannot guarantee against loss or corruption. To ensure an additional layer of protection, we recommend maintaining an independent backup of your Data.</p>

                        <h2>5. Security</h2>
                        <p>Security of on-device Data depends on your device security features (such as passcode/biometrics and operating-system encryption). We recommend enabling protections to keep your Data secure.</p>

                        <h2>6. Permissions</h2>
                        <p>Cashiro requires the following permissions to function:</p>
                        <ul>
                            <li><strong>SMS Permission:</strong> Read-only access to transaction messages. Only Bank SMS are processed; personal messages are never accessed or read. We do not modify or delete any messages.</li>
                            <li><strong>Storage/Media Permission:</strong> Used only when you choose to export data to CSV or import PDF statements.</li>
                        </ul>

                        <h2>7. Third-Party Services</h2>
                        <p>Cashiro is a standalone application and does not integrate with any third-party advertising or analytics networks.</p>

                        <h2>8. Changes to This Policy</h2>
                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>

                        <h2>9. Contact me</h2>
                        <p>If you have any questions about this Privacy Policy, check out our "Contact Me" page .</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

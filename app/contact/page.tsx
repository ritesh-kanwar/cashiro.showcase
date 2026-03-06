import { Mail, MessageSquare, Github, MessageCircle } from "lucide-react";
import { EtherealShadow } from "@/components/ui/etheral-shadow";
import { GlowCard } from "@/components/ui/spotlight-card";
import styles from "@/styles/contact.module.css";

export const metadata = {
    title: "Contact Us — Cashiro",
    description: "Get in touch with the Cashiro team for support, community discussions, or issue reporting.",
};

export default function ContactPage() {
    return (
        <div className={styles.contactPage}>
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
                            <MessageCircle size={40} color="#00e5a0" />
                        </div>
                        <h1>Get in Touch</h1>
                        <p>Have questions or feedback? We'd love to hear from you.</p>
                    </div>
                </div>
                <div className={styles.scallopDivider}></div>
            </section>

            <section className={styles.contactOptions}>
                <div className="container">
                    <div className={styles.optionsGrid}>
                        {/* Email */}
                        <GlowCard glowColor="blue" customSize={true}>
                            <div className={styles.optionCard}>
                                <div className={styles.optionIcon}><Mail size={32} /></div>
                                <h3>Email Support</h3>
                                <p>For direct inquiries or private support requests.</p>
                                <a href="mailto:riteshkanwar0309@gmail.com" className={`${styles.btnAction} ${styles.btnBlue}`}>
                                    Send Email
                                </a>
                            </div>
                        </GlowCard>

                        {/* Discord & GitHub Discussions */}
                        <GlowCard glowColor="purple" customSize={true}>
                            <div className={styles.optionCard}>
                                <div className={styles.optionIcon}><MessageSquare size={32} /></div>
                                <h3>Community</h3>
                                <p>Join our community for real-time discussions, help, and updates.</p>
                                <div className={styles.cardButtons}>
                                    <a href="https://discord.gg/6qaYgpJTg" target="_blank" rel="noopener noreferrer" className={`${styles.btnAction} ${styles.btnPurple}`}>
                                        Join Discord
                                    </a>
                                    <a href="https://github.com/ritesh-kanwar/Cashiro/discussions" target="_blank" rel="noopener noreferrer" className={`${styles.btnAction} ${styles.btnGreenOutline}`}>
                                        GitHub Discussions
                                    </a>
                                </div>
                            </div>
                        </GlowCard>

                        {/* GitHub */}
                        <GlowCard glowColor="green" customSize={true}>
                            <div className={styles.optionCard}>
                                <div className={styles.optionIcon}><Github size={32} /></div>
                                <h3>Issue Tracker</h3>
                                <p>Report bugs or suggest new features on our GitHub repository.</p>
                                <a href="https://github.com/ritesh-kanwar/Cashiro/issues/new/choose" target="_blank" rel="noopener noreferrer" className={`${styles.btnAction} ${styles.btnGreen}`}>
                                    Open Issue
                                </a>
                            </div>
                        </GlowCard>
                    </div>
                </div>
            </section>
            <section className={styles.infoSection}>
                <div className="container">
                    <h2 className={styles.sectionHeading}>Before Contacting Us</h2>
                    <div className={`${styles.infoGrid} ${styles.beforeGrid}`}>
                        <div className={styles.infoCard}>
                            <h3>README</h3>
                            <p>Check our README file for detailed installation and setup instructions.</p>
                            <a href="https://github.com/ritesh-kanwar/Cashiro#readme" target="_blank" rel="noopener noreferrer" className={`btn-secondary ${styles.fullWidthBtn}`}>Check README</a>
                        </div>
                        <div className={styles.infoCard}>
                            <h3>GitHub Issues</h3>
                            <p>Search existing issues to see if your problem has already been reported.</p>
                            <a href="https://github.com/ritesh-kanwar/Cashiro/issues" target="_blank" rel="noopener noreferrer" className={`btn-secondary ${styles.fullWidthBtn}`}>Search Issues</a>
                        </div>
                        <div className={styles.infoCard}>
                            <h3>Documentation</h3>
                            <p>Check our setup guide for detailed documentation and walkthoughs.</p>
                            <a href="/guides" className={`btn-secondary ${styles.fullWidthBtn}`}>Setup Guide</a>
                        </div>
                    </div>

                    <div className={styles.infoGrid}>
                        <div className={styles.infoCard}>
                            <h3>What to Include</h3>
                            <ul className={styles.infoList}>
                                <li>
                                    <strong>Device Information</strong>
                                    <p>Android version, device model (e.g. Pixel 7, Android 13)</p>
                                </li>
                                <li>
                                    <strong>App Version</strong>
                                    <p>The specific version of Cashiro you're using</p>
                                </li>
                                <li>
                                    <strong>Problem Description</strong>
                                    <p>A clear, concise description of the issue or feedback</p>
                                </li>
                                <li>
                                    <strong>Steps to Reproduce</strong>
                                    <p>How can we see the problem ourselves? (for bugs)</p>
                                </li>
                                <li>
                                    <strong>Screenshots/Logs</strong>
                                    <p>If applicable, include relevant screenshots or log files</p>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.infoCard}>
                            <h3>Response Times</h3>
                            <ul className={styles.infoList}>
                                <li>
                                    <strong>Email</strong>
                                    <p>I aim to respond to all email inquiries within 24-48 hours.</p>
                                </li>
                                <li>
                                    <strong>GitHub Issues</strong>
                                    <p>Usually reviewed and addressed within 2-3 days.</p>
                                </li>
                                <li>
                                    <strong>Bug Reports</strong>
                                    <p>Priority response for critical bugs within 24 hours.</p>
                                </li>
                                <li>
                                    <strong>Feature Requests</strong>
                                    <p>Subject to community discussion and long-term evaluation.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.fullWidthSection}>
                        <div className={styles.fullWidthContent}>
                            <h3>Contributing</h3>
                            <p>Want to help make Cashiro even better? We welcome all kinds of contributions, from code and documentation to testing and translations.</p>
                            <div className={styles.contributingButtons}>
                                <a href="https://github.com/ritesh-kanwar/Cashiro" target="_blank" rel="noopener noreferrer" className={`${styles.btnAction} ${styles.btnBlue}`}>
                                    Fork on GitHub
                                </a>
                                <a href="https://github.com/ritesh-kanwar/Cashiro/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className={`${styles.btnAction} ${styles.btnPurpleOutline}`}>
                                    Contributing Guidelines
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.thanksNote}>
                        <h2>Thank you for being part of Cashiro</h2>
                        <p>Your feedback helps us make the app better for everyone. — The Cashiro Team</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

import { Download, Github, Shield, Info, Smartphone, Apple, ShoppingBag } from "lucide-react";
import { EtherealShadow } from "@/components/ui/etheral-shadow";
import { GlowCard } from "@/components/ui/spotlight-card";
import styles from "@/styles/download.module.css";

export const metadata = {
    title: "Download Cashiro — Get Started Today",
    description: "Download the latest version of Cashiro for Android from GitHub or F-Droid.",
};

export default function DownloadPage() {
    return (
        <div className={styles.downloadPage}>
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
                        <h1>Download Cashiro</h1>
                        <p>Get the latest version of Cashiro</p>
                    </div>
                </div>
                <div className={styles.scallopDivider}></div>
            </section>

            <section className={styles.downloadOptions}>
                <div className="container">
                    <div className={styles.optionsGrid}>
                        {/* GitHub Releases */}
                        <GlowCard glowColor="blue" customSize={true}>
                            <div className={styles.optionCard}>
                                <div className={styles.optionIcon}><Github size={32} /></div>
                                <h3>GitHub Releases</h3>
                                <p>Download the latest APK directly from our official repository.</p>
                                <a href="https://github.com/ritesh-kanwar/Cashiro/releases/latest" target="_blank" rel="noopener noreferrer" className={`${styles.btnDownload} ${styles.btnBlue}`}>
                                    <Github size={20} />
                                    Download from GitHub
                                </a>
                            </div>
                        </GlowCard>

                        {/* F-Droid */}
                        <GlowCard glowColor="orange" customSize={true}>
                            <div className={styles.optionCard}>
                                <div className={styles.optionIcon}><Smartphone size={32} /></div>
                                <h3>F-Droid</h3>
                                <p>Cashiro is available on F-Droid, the decentralized app store for FOSS.</p>
                                <a href="https://f-droid.org/packages/com.ritesh_kanwar.cashiro/" target="_blank" rel="noopener noreferrer" className={`${styles.btnDownload} ${styles.btnOrange}`}>
                                    <Download size={20} />
                                    Get it on F-Droid
                                </a>
                            </div>
                        </GlowCard>


                        {/* Play Store */}
                        <GlowCard glowColor="green" customSize={true}>
                            <div className={styles.optionCard}>
                                <div className={styles.optionIcon}><ShoppingBag size={32} /></div>
                                <h3>Play Store</h3>
                                <p>Get Cashiro from Google Play Store for automatic updates.</p>
                                <button className={`${styles.btnComingSoon} ${styles.btnGreen}`}>
                                    <Download size={20} />
                                    Android (Coming Soon)
                                </button>
                            </div>
                        </GlowCard>

                        {/* App Store */}
                        <GlowCard glowColor="purple" customSize={true}>
                            <div className={styles.optionCard}>
                                <div className={styles.optionIcon}><Apple size={32} /></div>
                                <h3>App Store</h3>
                                <p>An iOS version is in the works. Coming to Apple App Store soon.</p>
                                <button className={`${styles.btnComingSoon} ${styles.btnPurple}`}>
                                    <Apple size={20} />
                                    iOS (Coming Soon)
                                </button>
                            </div>
                        </GlowCard>
                    </div>

                    <GlowCard glowColor="blue" customSize={true}>
                        <div className={styles.requirements}>
                            <div className={styles.reqHeader}>
                                <Info size={20} color="#00e5a0" />
                                <h3>System Requirements</h3>
                            </div>
                            <div className={styles.reqGrid}>
                                <div className={styles.reqItem}>
                                    <div className={styles.reqIcon}><Smartphone size={18} /></div>
                                    <div>
                                        <span className={styles.reqLabel}>Android</span>
                                        <span className={styles.reqValue}>Version 8.0 (Oreo) or higher (API 26+)</span>
                                    </div>
                                </div>
                                <div className={styles.reqItem}>
                                    <div className={styles.reqIcon}><Download size={18} /></div>
                                    <div>
                                        <span className={styles.reqLabel}>Storage</span>
                                        <span className={styles.reqValue}>Approx. 50MB free space</span>
                                    </div>
                                </div>
                                <div className={styles.reqItem}>
                                    <div className={styles.reqIcon}><Shield size={18} /></div>
                                    <div>
                                        <span className={styles.reqLabel}>Permissions</span>
                                        <span className={styles.reqValue}>SMS (Read-only), Files/Media (for CSV export/PDF import)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlowCard>

                    <div className={styles.fDroidBadge}>
                        <p className={styles.fossTag}>100% Free and Open Source Software (FOSS)</p>
                        <p>All builds are signed and verified. You can also build from source if you prefer.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

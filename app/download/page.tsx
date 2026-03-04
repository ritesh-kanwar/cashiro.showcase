import { Download, Github, Shield, Info, Smartphone } from "lucide-react";
import styles from "@/styles/download.module.css";

export const metadata = {
    title: "Download Cashiro — Get Started Today",
    description: "Download the latest version of Cashiro for Android from GitHub or F-Droid.",
};

export default function DownloadPage() {
    return (
        <div className={styles.downloadPage}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1>Download Cashiro</h1>
                        <p>Get the latest version of your personal financial tracker.</p>
                    </div>
                </div>
            </section>

            <section className={styles.downloadOptions}>
                <div className="container">
                    <div className={styles.optionsGrid}>
                        {/* GitHub Releases */}
                        <div className={styles.optionCard}>
                            <div className={styles.optionIcon}><Github size={32} /></div>
                            <h3>GitHub Releases</h3>
                            <p>Download the latest APK directly from our official repository.</p>
                            <a href="https://github.com/ritesh-kanwar/Cashiro/releases" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                View Releases
                            </a>
                        </div>

                        {/* F-Droid (Placeholder) */}
                        <div className={styles.optionCard}>
                            <div className={styles.optionIcon}><Smartphone size={32} /></div>
                            <h3>F-Droid</h3>
                            <p>Cashiro is available on F-Droid, the decentralized app store for FOSS.</p>
                            <a href="#" className="btn-secondary">
                                Coming Soon
                            </a>
                        </div>

                        {/* Direct APK */}
                        <div className={styles.optionCard}>
                            <div className={styles.optionIcon}><Download size={32} /></div>
                            <h3>Direct Download</h3>
                            <p>Quickly download the stable APK file for manual installation.</p>
                            <a href="https://github.com/ritesh-kanwar/Cashiro/releases/latest" className="btn-secondary">
                                Download Latest APK
                            </a>
                        </div>
                    </div>

                    <div className={styles.requirements}>
                        <div className={styles.reqHeader}>
                            <Info size={20} color="#00e5a0" />
                            <h3>System Requirements</h3>
                        </div>
                        <ul>
                            <li><strong>Android:</strong> Version 8.0 (Oreo) or higher (API 26+)</li>
                            <li><strong>Storage:</strong> Approx. 50MB free space</li>
                            <li><strong>Permissions:</strong> SMS (Read-only), Files/Media (for CSV export/PDF import)</li>
                        </ul>
                    </div>

                    <div className={styles.fDroidBadge}>
                        <p className={styles.fossTag}>100% Free and Open Source Software (FOSS)</p>
                        <p>All builds are signed and verified. You can also build from source if you prefer.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

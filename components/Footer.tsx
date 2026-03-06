import Link from "next/link";
import { Github, Heart, Shield, FileText, HelpCircle } from "lucide-react";
import styles from "../styles/footer.module.css";
import { assetPath } from "@/lib/utils";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.linksGrid}>
                    <div className={styles.linkColumn}>
                        <h3>RESOURCES</h3>
                        <Link href="/guides">Guides</Link>
                        <Link href="/faq">FAQs</Link>
                    </div>
                    <div className={styles.linkColumn}>
                        <h3>PRODUCTS</h3>
                        <Link href="/download">Android App</Link>
                        <span className={styles.comingSoon}>iOS (Coming soon)</span>
                    </div>
                    <div className={styles.linkColumn}>
                        <h3>SOCIALS</h3>
                        <a href="https://github.com/ritesh-kanwar/Cashiro" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://discord.gg/6qaYgpJTg" target="_blank" rel="noopener noreferrer">Discord</a>
                    </div>
                    <div className={styles.linkColumn}>
                        <h3>INFORMATION</h3>
                        <Link href="/contact">Contact me</Link>
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className={`container ${styles.bottomContainer}`}>
                    <div className={styles.bottomBrand}>
                        <div className="relative w-8 h-8 flex items-center justify-center group overflow-hidden">
                            <img
                                src={assetPath("/Cashiro.svg")}
                                alt="Cashiro Logo Solid"
                                className="w-full h-full object-contain transition-all duration-500 absolute inset-0 opacity-0 dark:opacity-100 dark:invert"
                            />
                            <img
                                src={assetPath("/Cashiro_outline.svg")}
                                alt="Cashiro Logo Outline"
                                className="w-full h-full object-contain transition-all duration-500 absolute inset-0 opacity-100 dark:opacity-0"
                            />
                        </div>
                        <p>&copy; {currentYear} Cashiro Team. All rights reserved.</p>
                    </div>
                    <div className={styles.bottomInfo}>
                        <p className={styles.address}>
                            Built with privacy ❤️
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

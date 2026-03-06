"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Wallet, Menu, X, Download, Sun, Moon } from "lucide-react";
import styles from "../styles/navbar.module.css";
import { assetPath } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 5);
        };
        window.addEventListener("scroll", handleScroll);

        // Initialize theme from localStorage or system preference
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <div className="relative w-8 h-8 flex items-center justify-center group overflow-hidden">
                        {/* Layered Logos: Solid for Dark, Outline for Light */}
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
                    <span className={styles.logoText}>Cashiro</span>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <Link href="/#features" className={styles.navLink}>Features</Link>
                    <Link href="/faq" className={styles.navLink}>FAQ</Link>
                    <Link href="/guides" className={styles.navLink}>Guides</Link>

                    <button
                        onClick={toggleTheme}
                        className={styles.themeToggle}
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <Link href="/download" className={`btn-primary ${styles.downloadBtn}`}>
                        <Download size={18} />
                        Download
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ""}`}>
                <Link href="/#features" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
                <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
                <Link href="/guides" onClick={() => setIsMobileMenuOpen(false)}>Guides</Link>

                <button
                    onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
                    className={styles.mobileThemeToggle}
                >
                    {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                    <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                </button>

                <Link href="/download" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                    <Download size={18} />
                    Download
                </Link>

                <div className={styles.mobileFooter}>
                    <Link href="/terms" className={styles.mobileSecondaryLink} onClick={() => setIsMobileMenuOpen(false)}>Terms of Service</Link>
                    <Link href="/privacy" className={styles.mobileSecondaryLink} onClick={() => setIsMobileMenuOpen(false)}>Privacy Policy</Link>
                </div>
            </div>
        </nav>
    );
}

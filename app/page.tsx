"use client";

import Link from "next/link";
import { Download, Github, Shield, Zap, Lock, BarChart3, Globe, PiggyBank, Landmark, Tags, MessageSquare } from "lucide-react";
import styles from "../styles/home.module.css";
import { EtherealShadow } from "@/components/ui/etheral-shadow";
import { WorldMap } from "@/components/ui/map";
import { HeroSection } from "@/components/ui/feature-carousel";
import { GlowCard } from "@/components/ui/spotlight-card";
import { ScreenshotCarousel } from "@/components/ui/screenshot-carousel";
import { useState, useEffect } from "react";
import { assetPath } from "@/lib/utils";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Initial check
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    // Observe changes to the class attribute on html
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setTheme(isDark ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const galleryScreenshots = [
    { src: '/screenshots/transactions_${theme}.webp', alt: "Transactions View", title: "Transactions View" },
    { src: '/screenshots/analytics_${theme}.webp', alt: "Analytics View", title: "Analytics View" },
    { src: '/screenshots/budgets_${theme}.webp', alt: "Budget View", title: "Budget View" },
    { src: '/screenshots/budget_history_${theme}.webp', alt: "Budget History", title: "Budget History" },
    { src: '/screenshots/budget_details_${theme}.webp', alt: "Budget Detail", title: "Budget Detail" },
    { src: '/screenshots/chat_${theme}.webp', alt: "AI Assistant", title: "AI Assistant" },
    { src: '/screenshots/subscriptions_${theme}.webp', alt: "Subscriptions", title: "Subscriptions" },
    { src: '/screenshots/categories_${theme}.webp', alt: "Categories", title: "Categories" },
    { src: '/screenshots/smart_rule_${theme}.webp', alt: "Smart Rules", title: "Smart Rules" },
    { src: '/screenshots/settings_${theme}.webp', alt: "Settings", title: "Settings" },
    { src: '/screenshots/appearance_${theme}.webp', alt: "Appearance", title: "Appearance" },
    { src: '/screenshots/profile_${theme}.webp', alt: "Profile", title: "Profile" },
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Track money, <br />
            <span className="text-gradient">Stay 100% Private.</span>
          </>
        }
        subtitle="Cashiro turns your bank SMS and PDF statements into a clean, searchable financial timeline with secure regex patterns. No cloud, no tracking, just your money."
        images={[
          { src: '/screenshots/home_${theme}.webp', alt: "Cashiro Home Screen" },
          { src: '/screenshots/analytics_${theme}.webp', alt: "Cashiro Analytics Screen" },
          { src: '/screenshots/budgets_${theme}.webp', alt: "Cashiro Budgets Screen" },
          { src: '/screenshots/transactions_${theme}.webp', alt: "Cashiro Transactions Screen" },
          { src: '/screenshots/profile_${theme}.webp', alt: "Cashiro Profile Screen" },
        ]}
        theme={theme}
        className={styles.heroWrapper}
        actions={
          <>
            <Link href="/download" className="btn-primary w-full md:w-auto">
              <Download size={20} />
              Get Started
            </Link>
            <a href="https://github.com/ritesh-kanwar/Cashiro" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full md:w-auto">
              <Github size={20} />
              Star on GitHub
            </a>
          </>
        }
        metrics={
          <>
            <div className={styles.metric}>
              <strong>40+</strong>
              <span>Banks Supported</span>
            </div>
            <div className={styles.metricDivider}></div>
            <div className={styles.metric}>
              <strong>10+</strong>
              <span>Countries</span>
            </div>
            <div className={styles.metricDivider}></div>
            <div className={styles.metric}>
              <strong>0</strong>
              <span>Data Collected</span>
            </div>
          </>
        }
      >
        <div className={styles.heroBackdrop}>
          <EtherealShadow
            color="rgba(255, 255, 255, 0.1)"
            animation={{ scale: 60, speed: 30 }}
            noise={{ opacity: 0.3, scale: 1 }}
            sizing="fill"
          />
        </div>
      </HeroSection>

      {/* Trust Badges / Stats Section */}
      <section className={styles.trustSection}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}><Lock size={24} /></div>
              <div>
                <h3>Privacy First</h3>
                <p>All processing happens locally on your device.</p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}><Shield size={24} /></div>
              <div>
                <h3>Open Source</h3>
                <p>Audit the code yourself on GitHub. GPL-3.0 Licensed.</p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}><Zap size={24} /></div>
              <div>
                <h3>AI Assistant</h3>
                <p>Ask questions about your spending to your local AI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={styles.howItWorks}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How it works</h2>
            <p className={styles.sectionSubtitle}>Simple, automated, and completely local.</p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h3>Grant Permissions</h3>
                <p>Allow read-only access to SMS. Only Bank SMS are processed; personal messages are never read. No inbox changes, no messages sent. Ever.</p>
              </div>
            </div>
            <div className={styles.stepLine}></div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h3>Auto-Parsing</h3>
                <p>Cashiro uses secure regex patterns to extract amount, merchant, and category from your bank messages instantly.</p>
              </div>
            </div>
            <div className={styles.stepLine}></div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3>Get Insights</h3>
                <p>View your spending timeline, track budgets, and chat with your local AI assistant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Powerful Features</h2>
            <p className={styles.sectionSubtitle}>Everything you need to master your finances.</p>
          </div>

          <div className={styles.featuresGrid}>
            <GlowCard glowColor="blue" customSize={true} className="h-full flex flex-col">
              <div className={`${styles.featureIcon} ${styles.iconBlue}`}><MessageSquare size={24} /></div>
              <h3 className="text-xl font-bold mb-2 mt-4">Smart SMS Parsing</h3>
              <p className="text-muted-foreground">Supports 47+ banks across 10 countries with automated category detection.</p>
            </GlowCard>
            <GlowCard glowColor="green" customSize={true} className="h-full flex flex-col">
              <div className={`${styles.featureIcon} ${styles.iconGreen}`}><Shield size={24} /></div>
              <h3 className="text-xl font-bold mb-2 mt-4">Smart PDF Parsing</h3>
              <p className="text-muted-foreground">Import GPay and PhonePe PDF statements for a complete transaction history.</p>
            </GlowCard>
            <GlowCard glowColor="purple" customSize={true} className="h-full flex flex-col">
              <div className={`${styles.featureIcon} ${styles.iconPurple}`}><PiggyBank size={24} /></div>
              <h3 className="text-xl font-bold mb-2 mt-4">Budget Tracking</h3>
              <p className="text-muted-foreground">Set monthly limits for categories and track your progress with live visual bars.</p>
            </GlowCard>
            <GlowCard glowColor="orange" customSize={true} className="h-full flex flex-col">
              <div className={`${styles.featureIcon} ${styles.iconOrange}`}><Lock size={24} /></div>
              <h3 className="text-xl font-bold mb-2 mt-4">Privacy Assured</h3>
              <p className="text-muted-foreground">No cloud sync, no analytics, no corporate tracking. Your data is yours alone.</p>
            </GlowCard>
            <GlowCard glowColor="red" customSize={true} className="h-full flex flex-col">
              <div className={`${styles.featureIcon} ${styles.iconRed}`}><Zap size={24} /></div>
              <h3 className="text-xl font-bold mb-2 mt-4">Subscription Tracking</h3>
              <p className="text-muted-foreground">Automatically detect recurring payments and never miss a renewal again.</p>
            </GlowCard>
            <GlowCard glowColor="blue" customSize={true} className="h-full flex flex-col">
              <div className={`${styles.featureIcon} ${styles.iconCyan}`}><BarChart3 size={24} /></div>
              <h3 className="text-xl font-bold mb-2 mt-4">Data Export</h3>
              <p className="text-muted-foreground">Export your entire transaction history to CSV whenever you need it for taxes.</p>
            </GlowCard>
            <GlowCard glowColor="green" customSize={true} className="h-full flex flex-col">
              <div className={`${styles.featureIcon} ${styles.iconGreen}`}><Zap size={24} /></div>
              <h3 className="text-xl font-bold mb-2 mt-4">Smart Rules</h3>
              <p className="text-muted-foreground">Automate transaction categorization and cleanup with powerful custom rules.</p>
            </GlowCard>
            <GlowCard glowColor="purple" customSize={true} className="h-full flex flex-col">
              <div className={`${styles.featureIcon} ${styles.iconPink}`}><Landmark size={24} /></div>
              <h3 className="text-xl font-bold mb-2 mt-4">Advance Account Management</h3>
              <p className="text-muted-foreground">Create Custom account for manual tracking.</p>
            </GlowCard>
            <GlowCard glowColor="orange" customSize={true} className="h-full flex flex-col">
              <div className={`${styles.featureIcon} ${styles.iconOrange}`}><Tags size={24} /></div>
              <h3 className="text-xl font-bold mb-2 mt-4">Advanced Categories</h3>
              <p className="text-muted-foreground">Create and manage custom categories and subcategories.</p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className={styles.screenshots}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Experience Cashiro</h2>
            <p className={styles.sectionSubtitle}>Beautiful, intuitive, and feature-rich interface.</p>
          </div>
        </div>
        <ScreenshotCarousel screenshots={galleryScreenshots} theme={theme} />
      </section>

      {/* Supported Banks */}
      <section className={styles.banks}>
        {/* Background Map */}
        <div className={styles.banksVisual}>
          <WorldMap
            theme={theme}
            dots={[
              {
                start: { lat: 28.6139, lng: 77.209, label: "New Delhi" }, // India
                end: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
              },
              {
                start: { lat: 40.7128, lng: -74.0060, label: "New York" }, // USA
                end: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
              },
              {
                start: { lat: -1.2921, lng: 36.8219, label: "Nairobi" }, // Kenya
                end: { lat: 6.5244, lng: 3.3792, label: "Lagos" }, // Nigeria
              },
              {
                start: { lat: -26.2041, lng: 28.0473, label: "Johannesburg" }, // South Africa
                end: { lat: 30.0444, lng: 31.2357, label: "Cairo" }, // Egypt
              },
            ]}
          />
        </div>

        <div className="container">
          <div className={styles.banksContent}>
            <div className={styles.banksText}>
              <div className={styles.banksBadge}>
                <Globe size={16} />
                Global Support
              </div>
              <h2 className={styles.sectionTitle}>47+ Banks Supported</h2>
              <p className={styles.sectionSubtitle}>
                Cashiro supports 10 countries including India, USA, UAE, Saudi Arabia, Kenya, Nepal, and more.
              </p>
              <div className={styles.bankTags}>
                <span>🇮🇳 HDFC</span>
                <span>🇮🇳 SBI</span>
                <span>🇮🇳 ICICI</span>
                <span>🇺🇸 Citi</span>
                <span>🇺🇸 Discover</span>
                <span>🇦🇪 FAB</span>
                <span>🇸🇦 Alinma</span>
                <span>🇳🇵 Nabil</span>
                <span>🇰🇪 M-PESA</span>
                <span>& more...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlow}></div>
            <h2>Ready to take control of your <br /> <span className="text-gradient">Financial Privacy?</span></h2>
            <p>Download Cashiro today and start tracking your expenses without compromises.</p>
            <div className={styles.heroActions}>
              <Link href="/download" className="btn-primary w-full md:w-auto">
                <Download size={20} />
                Download Now
              </Link>
              <a href="https://github.com/ritesh-kanwar/Cashiro" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full md:w-auto">
                <Github size={20} />
                View Source
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

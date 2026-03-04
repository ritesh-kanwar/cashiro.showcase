import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { guides } from "@/data/guides";
import styles from "@/styles/guides.module.css";

export const metadata = {
    title: "Guides & Documentation — Cashiro",
    description: "Learn how to use Cashiro to track your expenses privately and efficiently.",
};

export default function GuidesPage() {
    return (
        <div className={styles.guidesPage}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={styles.icon}>
                            <BookOpen size={40} color="#00e5a0" />
                        </div>
                        <h1>Guides & Documentation</h1>
                        <p>Learn how to get the most out of Cashiro with our helpful guides.</p>
                    </div>
                </div>
            </section>

            <section className={styles.guidesList}>
                <div className="container">
                    <div className={styles.guidesGrid}>
                        {guides.map((guide) => (
                            <Link href={`/guides/${guide.slug}`} key={guide.slug} className={styles.guideCard}>
                                <div className={styles.cardHeader}>
                                    <h3>{guide.title}</h3>
                                    <div className={styles.arrow}><ArrowRight size={20} /></div>
                                </div>
                                <p>{guide.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Calendar, User } from "lucide-react";
import { guides } from "@/data/guides";
import styles from "@/styles/guides.module.css";

export async function generateStaticParams() {
    return guides.map((guide) => ({
        slug: guide.slug,
    }));
}

export default async function GuideArticle({ params }) {
    const { slug } = await params;
    const guide = guides.find((g) => g.slug === slug);

    if (!guide) {
        notFound();
    }

    return (
        <div className={styles.guideArticle}>
            <section className={styles.articleHeader}>
                <div className="container">
                    <Link href="/guides" className={styles.backLink}>
                        <ChevronLeft size={18} />
                        Back to Guides
                    </Link>
                    <h1 className={styles.articleTitle}>{guide.title}</h1>
                    <div className={styles.articleMeta}>
                        <div className={styles.metaItem}>
                            <User size={16} />
                            <span>Cashiro Team</span>
                        </div>
                        <div className={styles.metaItem}>
                            <Calendar size={16} />
                            <span>Updated Mar 2024</span>
                        </div>
                    </div>
                </div>
            </section>

            <article className={styles.articleBody}>
                <div className="container">
                    <div className={styles.content}>
                        <p className={styles.lead}>{guide.description}</p>
                        <div dangerouslySetInnerHTML={{ __html: guide.content }} />

                        <div className={styles.placeholderBox}>
                            <p>This guide's full content is currently being prepared for the 2.0 release. Check back soon for detailed instructions and screenshots!</p>
                        </div>
                    </div>
                </div>
            </article>

            <section className={styles.relatedCTA}>
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h3>Have more questions?</h3>
                        <p>If you couldn't find what you were looking for, check our FAQ or join the community.</p>
                        <div className={styles.ctaButtons}>
                            <Link href="/faq" className="btn-secondary">Check FAQ</Link>
                            <a href="https://github.com/ritesh-kanwar/Cashiro/discussions" className="btn-primary">Community Discussion</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

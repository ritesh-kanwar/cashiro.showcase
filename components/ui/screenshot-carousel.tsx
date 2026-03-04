'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import styles from '@/styles/home.module.css';
import { assetPath } from '@/lib/utils';

interface Screenshot {
    src: string;
    alt: string;
    title: string;
}

interface ScreenshotCarouselProps {
    screenshots: Screenshot[];
    theme: 'light' | 'dark';
}

export const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({ screenshots, theme }) => {
    // Duplicate screenshots for infinite effect (3x)
    const extendedScreenshots = [...screenshots, ...screenshots, ...screenshots];
    const marqueeRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [baseWidth, setBaseWidth] = useState(0);

    const speed = 0.5;

    // Gate the rAF loop: only animate when the carousel is in the viewport
    const isVisibleRef = useRef(false);

    useEffect(() => {
        const el = marqueeRef.current?.parentElement;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
            { rootMargin: '100px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Calculate width and set initial position
    useEffect(() => {
        const updateWidth = () => {
            if (marqueeRef.current) {
                const singleWidth = marqueeRef.current.scrollWidth / 3;
                setBaseWidth(singleWidth);
                if (x.get() === 0 && singleWidth > 0) {
                    x.set(-singleWidth);
                }
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        const timer = setTimeout(updateWidth, 1000);

        return () => {
            window.removeEventListener('resize', updateWidth);
            clearTimeout(timer);
        };
    }, [screenshots]);

    // Infinite wrapping logic
    useEffect(() => {
        if (baseWidth <= 0) return;

        return x.on("change", (latest) => {
            const min = -2 * baseWidth;
            const max = -baseWidth;

            if (latest <= min) {
                x.set(latest + baseWidth);
            } else if (latest >= max && isDragging) {
                x.set(latest - baseWidth);
            }
        });
    }, [baseWidth, isDragging]);

    useAnimationFrame(() => {
        if (!isVisibleRef.current) return; // skip when off-screen
        if (!isHovered && !isDragging) {
            x.set(x.get() - speed);
        }
    });

    return (
        <div
            className={styles.marqueeContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                ref={marqueeRef}
                className={styles.marqueeContent}
                style={{ x }}
                drag="x"
                dragConstraints={{ left: -10000, right: 10000 }}
                dragElastic={0.05}
                dragMomentum={true}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                whileTap={{ cursor: 'grabbing' }}
            >
                {extendedScreenshots.map((item, index) => (
                    <div key={`${item.title}-${index}`} className={styles.marqueeItem}>
                        {/* Plain card div — avoids 36× GlowCard instances (each had background-attachment:fixed
                            which triggers a full-page repaint on every scroll frame on mobile). */}
                        <div className={styles.screenshotCard}>
                            <div className={styles.screenshotInner}>
                                <img
                                    src={assetPath(item.src, theme)}
                                    alt={item.alt}
                                    className={styles.screenshotImage}
                                    draggable={false}
                                    loading="lazy"
                                    decoding="async"
                                    onLoad={() => {
                                        if (marqueeRef.current) {
                                            setBaseWidth(marqueeRef.current.scrollWidth / 3);
                                        }
                                    }}
                                />
                                <span className={styles.screenshotLabel}>{item.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

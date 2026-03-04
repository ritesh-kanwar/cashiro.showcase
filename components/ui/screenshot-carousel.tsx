'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { GlowCard } from './spotlight-card';
import styles from '@/styles/home.module.css';

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
                        <GlowCard
                            glowColor="blue"
                            className={styles.screenshotGlowCard}
                            customSize={true}
                            radius={32}
                        >
                            <div className={styles.screenshotInner}>
                                <img
                                    src={item.src.replace('${theme}', theme)}
                                    alt={item.alt}
                                    className={styles.screenshotImage}
                                    draggable={false}
                                    onLoad={() => {
                                        if (marqueeRef.current) {
                                            setBaseWidth(marqueeRef.current.scrollWidth / 3);
                                        }
                                    }}
                                />
                                <span className={styles.screenshotLabel}>{item.title}</span>
                            </div>
                        </GlowCard>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

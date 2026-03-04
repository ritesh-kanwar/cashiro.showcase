'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn, assetPath } from '@/lib/utils';

// --- TYPES ---
interface HeroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React.ReactNode;
    subtitle: string;
    images: { src: string; alt: string; }[];
    theme?: 'light' | 'dark';
    actions?: React.ReactNode;
    metrics?: React.ReactNode;
    children?: React.ReactNode;
}

// --- HERO SECTION COMPONENT ---
export const HeroSection = React.forwardRef<HTMLDivElement, HeroProps>(
    ({ title, subtitle, images, theme, actions, metrics, children, className, ...props }, ref) => {
        const [currentIndex, setCurrentIndex] = React.useState(Math.floor(images.length / 2));

        const handleNext = React.useCallback(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, [images.length]);

        const handlePrev = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        };

        React.useEffect(() => {
            const timer = setInterval(() => {
                handleNext();
            }, 4000);
            return () => clearInterval(timer);
        }, [handleNext]);

        return (
            <div
                ref={ref}
                className={cn(
                    'relative w-full min-h-screen flex flex-col items-center justify-start md:justify-center overflow-hidden bg-background text-foreground pt-20 pb-20 md:pb-32',
                    className
                )}
                {...props}
            >
                {/* Background Layer (EtherealShadow etc) */}
                {children}

                {/* --- MOBILE LAYOUT (Vertical Stack) --- */}
                <div className="flex md:hidden flex-col items-start w-full z-30 px-6 space-y-12">
                    {/* Carousel Visual */}
                    <div className="relative w-full h-[450px] flex items-center justify-center [perspective:1000px]">
                        {images.map((image, index) => {
                            const offset = index - currentIndex;
                            const total = images.length;
                            let pos = (offset + total) % total;
                            if (pos > Math.floor(total / 2)) pos = pos - total;
                            const isCenter = pos === 0;
                            const isAdjacent = Math.abs(pos) === 1;

                            return (
                                <div
                                    key={index}
                                    className="absolute w-40 h-[335px] sm:w-48 sm:h-[415px] transition-all duration-1000 ease-in-out flex items-center justify-center"
                                    style={{
                                        transform: `translateX(${pos * 40}%) scale(${isCenter ? 1 : isAdjacent ? 0.75 : 0.5}) translateZ(${isCenter ? 0 : -150}px)`,
                                        zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                                        opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                                        visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                                    }}
                                >
                                    <div className="relative w-full h-full p-[6px] bg-black rounded-[1.8rem] sm:rounded-[1.8rem] shadow-xl border border-white/5 overflow-hidden">
                                        <img
                                            src={assetPath(image.src, theme)}
                                            alt={image.alt}
                                            className="w-full h-full object-contain bg-[#111] rounded-[1.2rem] sm:rounded-[2rem]"
                                            loading={isCenter ? 'eager' : 'lazy'}
                                            decoding="async"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                        {/* Mobile Navigation */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 pointer-events-none z-20">
                            <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-background/20 backdrop-blur-md border-border/50 pointer-events-auto" onClick={handlePrev}>
                                <ChevronLeft className="h-5 w-5" />
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-background/20 backdrop-blur-md border-border/50 pointer-events-auto" onClick={handleNext}>
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Headline Start */}
                    <div className="text-left space-y-4">
                        <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter leading-tight text-gradient">
                            {title}
                        </h1>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {subtitle}
                        </p>
                    </div>

                    {/* Metrics & Actions */}
                    <div className="flex flex-col items-start gap-10 w-full">
                        <div className="grid grid-cols-3 gap-2 w-full border-t border-border/20 pt-10 text-center">
                            {metrics}
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            {actions}
                        </div>
                    </div>
                </div>

                {/* --- DESKTOP LAYOUT (Cinematic Overlay) --- */}
                <div className="hidden md:flex flex-col items-center w-full h-full">
                    {/* The Carousel Visual Layer */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none -translate-y-12">
                        <div className="relative w-full h-[750px] flex items-center justify-center [perspective:1000px] pointer-events-auto">
                            {images.map((image, index) => {
                                const offset = index - currentIndex;
                                const total = images.length;
                                let pos = (offset + total) % total;
                                if (pos > Math.floor(total / 2)) {
                                    pos = pos - total;
                                }

                                const isCenter = pos === 0;
                                const isAdjacent = Math.abs(pos) === 1;

                                return (
                                    <div
                                        key={index}
                                        className={cn(
                                            'absolute w-64 h-[545px] transition-all duration-1000 ease-in-out',
                                            'flex items-center justify-center'
                                        )}
                                        style={{
                                            transform: `
                            translateX(${(pos) * 60}%) 
                            scale(${isCenter ? 1 : isAdjacent ? 0.8 : 0.6})
                            rotateY(${(pos) * -15}deg)
                            translateZ(${isCenter ? 0 : -200}px)
                        `,
                                            zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                                            opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                                            filter: isCenter ? 'blur(0px)' : 'blur(8px)',
                                            visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                                        }}
                                    >
                                        <div className="relative w-full h-full p-2 bg-black rounded-[2rem] shadow-2xl border-2 border-white/5 ring-1 ring-white/10 overflow-hidden">
                                            <img
                                                src={assetPath(image.src, theme)}
                                                alt={image.alt}
                                                className="w-full h-full object-contain bg-[#111] rounded-[1.2rem] saturate-[1.1] contrast-[1.1]"
                                                loading={isCenter ? 'eager' : 'lazy'}
                                                decoding="async"
                                            />
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Navigation Buttons Overlay */}
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-20 pointer-events-none z-20">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full h-12 w-12 bg-background/20 backdrop-blur-md border-border/50 pointer-events-auto hover:bg-background/40 transition-all"
                                    onClick={handlePrev}
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full h-12 w-12 bg-background/20 backdrop-blur-md border-border/50 pointer-events-auto hover:bg-background/40 transition-all"
                                    onClick={handleNext}
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Legibility Fade Layer */}
                    <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-background via-background/90 to-transparent z-20 pointer-events-none" />

                    {/* Information Overlay Layer */}
                    <div className="absolute inset-x-0 bottom-0 z-30 w-full mb-28">
                        <div className="container py-12 flex flex-row items-end justify-between gap-12">
                            {/* Bottom Start (Left) - Title & Subtitle */}
                            <div className="text-left space-y-6 max-w-xl">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1]">
                                    {title}
                                </h1>
                                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
                                    {subtitle}
                                </p>
                            </div>

                            {/* Bottom End (Right) - Actions & Metrics */}
                            <div className="flex flex-col items-end gap-12">
                                {actions && (
                                    <div className="flex gap-4">
                                        {actions}
                                    </div>
                                )}
                                {metrics && (
                                    <div className="flex items-center gap-8 border-t border-border/50 pt-8 mt-4">
                                        {metrics}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

HeroSection.displayName = 'HeroSection';

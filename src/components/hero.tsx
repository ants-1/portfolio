"use client";

import { DownArrow } from "./down-arrow";
import { SocialBar } from "./social-bar";

export function Hero() {
    return (
        <section id="home" className="relative bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center mb-[3rem]">
                <h1 className="text-5xl font-bold mb-4 text-center">Hello, I&apos;m <span className="text-blue-400">Anthony</span>.</h1>
                <p className="text-xl text-center text-gray-600 dark:text-gray-400">I&apos;m a recent graduate from the University of Westminster.</p>
                <SocialBar />
            </div>
            <DownArrow href="#about-me"/>
        </section>
    )
}
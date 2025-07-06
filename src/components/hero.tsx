"use client";

import { motion } from "framer-motion"
import { DownArrow } from "./down-arrow";
import { SocialBar } from "./social-bar";

export function Hero() {
    return (
        <section id="home" className="relative bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center mb-[3rem]"
            >
                <h1 className="text-5xl font-bold mb-4 text-center">Hello, I&apos;m <span className="text-blue-400">Anthony</span>.</h1>
                <p className="text-xl text-center text-gray-600 dark:text-gray-400">I&apos;m a recent graduate from the University of Westminster.</p>
                <SocialBar />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex justify-center"
            >
                <DownArrow href="#about-me" />
            </motion.div>
        </section>
    )
}
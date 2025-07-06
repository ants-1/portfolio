"use client";

import { motion } from "framer-motion";
import { DownArrow } from "./down-arrow";

export function AboutMe() {
    return (
        <section id="about-me" className="relative bg-white dark:bg-black min-h-screen flex flex-col items-center justify-center">
            <div className="text-center mb-[2rem]">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold mb-4"
                >
                    About <span className="text-blue-400">Me</span>.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-[32rem] md:max-w-[42rem] p-5 text-gray-600 dark:text-gray-400 md:text-lg">
                    Hi! I&apos;m Anthony Salisbury, a passionate and driven web developer with
                    a focus on crafting engaging, user-friendly digital experiences. With
                    a background in Computer Science and a keen eye for design, I enjoy
                    turning complex problems into elegant, accessible solutions. I work
                    extensively with modern web technologies like React, Next.js,
                    TypeScript, and Tailwind CSS for responsive front-end development,
                    while building robust back-end systems using Node.js and Express.
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center"
            >
                <DownArrow href="#skills" />
            </motion.div>
        </section>
    )
}
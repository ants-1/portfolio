"use client";

import { DownArrow } from "./down-arrow";

export function AboutMe() {
    return (
        <section id="about-me" className="relative bg-white dark:bg-black min-h-screen flex flex-col items-center justify-center">
            <div className="text-center mb-[2rem]">
                <h1 className="text-5xl font-bold mb-4">About <span className="text-blue-400">Me</span>.</h1>
                <p className="max-w-[32rem] md:max-w-[42rem] p-5 text-gray-600 dark:text-gray-400 md:text-lg">
                    Hi! I’m Anthony Salisbury, a passionate and driven web developer with
                    a focus on crafting engaging, user-friendly digital experiences. With
                    a background in Computer Science and a keen eye for design, I enjoy
                    turning complex problems into elegant, accessible solutions. I work
                    extensively with modern web technologies like React, Next.js,
                    TypeScript, and Tailwind CSS for responsive front-end development,
                    while building robust back-end systems using Node.js and Express.
                </p>
            </div>
            <DownArrow href="#skills"/>
        </section>
    )
}
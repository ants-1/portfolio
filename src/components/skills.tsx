"use client";

import { motion } from "framer-motion";
import { DownArrow } from "./down-arrow";

import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiRedux,
    SiNextdotjs,
    SiTailwindcss,
    SiMui,
    SiNodedotjs,
    SiExpress,
    SiFlask,
    SiPython,
    SiPostgresql,
    SiMongodb,
    SiGit,
    SiPostman,
    SiFigma,
    SiRender,
    SiJest,
    SiDocker,
    SiHtml5,
    SiCss3,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import {
    Card,
    CardTitle,
    CardContent,
    CardHeader,
} from "./ui/card";

const frontendSkills = [
    { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-blue-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-blue-400" /> },
    { name: "React", icon: <SiReact className="w-8 h-8 text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="w-8 h-8 text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-blue-400" /> },
    { name: "Material UI", icon: <SiMui className="w-8 h-8 text-blue-400" /> },
    { name: "HTML", icon: <SiHtml5 className="w-8 h-8 text-blue-400" /> },
    { name: "CSS", icon: <SiCss3 className="w-8 h-8 text-blue-400" /> },
];

const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 text-blue-400" /> },
    { name: "Express", icon: <SiExpress className="w-8 h-8 text-blue-400" /> },
    { name: "Flask", icon: <SiFlask className="w-8 h-8 text-blue-400" /> },
    { name: "Java", icon: <FaJava className="w-8 h-8 text-blue-400" /> },
    { name: "Python", icon: <SiPython className="w-8 h-8 text-blue-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-blue-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-blue-400" /> },
];

const miscellaneousSkills = [
    { name: "Git", icon: <SiGit className="w-8 h-8 text-blue-400" /> },
    { name: "Postman", icon: <SiPostman className="w-8 h-8 text-blue-400" /> },
    { name: "Figma", icon: <SiFigma className="w-8 h-8 text-blue-400" /> },
    { name: "Render", icon: <SiRender className="w-8 h-8 text-blue-400" /> },
    { name: "Jest", icon: <SiJest className="w-8 h-8 text-blue-400" /> },
    { name: "Docker", icon: <SiDocker className="w-8 h-8 text-blue-400" /> },
];

export function Skills() {
    return (
        <section
            id="skills"
            className="relative bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-4rem)] xl:min-h-screen flex flex-col items-center justify-center px-4 py-30"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-[2rem] max-w-7xl w-full"
            >
                <h1 className="text-5xl font-bold mb-6">
                    Skills<span className="text-blue-400">.</span>
                </h1>
            </motion.div>

            <div className="flex items-center justify-center flex-wrap gap-10">
                {[
                    { title: "Front-end", skills: frontendSkills },
                    { title: "Back-end", skills: backendSkills },
                    { title: "Miscellaneous", skills: miscellaneousSkills },
                ].map(({ title, skills }) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Card className="w-full max-w-[20rem] min-h-[23rem]">
                            <CardHeader>
                                <CardTitle className="font-semibold text-lg">{title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <motion.ul
                                    className="flex flex-wrap justify-center items-center gap-2 text-gray-700 dark:text-gray-300"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                            },
                                        },
                                    }}
                                >
                                    {skills.map(({ name, icon }) => (
                                        <motion.li
                                            key={name}
                                            variants={{
                                                hidden: { opacity: 0, y: 10 },
                                                visible: { opacity: 1, y: 0 },
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="flex flex-col items-center justify-center w-20 h-20"
                                        >
                                            {icon}
                                            <span className="mt-2 text-center text-gray-600 dark:text-gray-400">
                                                {name}
                                            </span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex justify-center"
            >
                <DownArrow href="#projects" />
            </motion.div>
        </section>
    );
}

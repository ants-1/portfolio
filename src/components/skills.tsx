"use client";

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
    { name: "JavaScript", icon: <SiJavascript className="w-10 h-10 text-blue-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-blue-400" /> },
    { name: "React", icon: <SiReact className="w-10 h-10 text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="w-10 h-10 text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10 text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10 text-blue-400" /> },
    { name: "Material UI", icon: <SiMui className="w-10 h-10 text-blue-400" /> },
    { name: "HTML", icon: <SiHtml5 className="w-10 h-10 text-blue-400" />},
    { name: "CSS", icon: <SiCss3 className="w-10 h-10 text-blue-400" />},
];

const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs className="w-10 h-10 text-blue-400" /> },
    { name: "Express", icon: <SiExpress className="w-10 h-10 text-blue-400" /> },
    { name: "Flask", icon: <SiFlask className="w-10 h-10 text-blue-400" /> },
    { name: "Java", icon: <FaJava className="w-10 h-10 text-blue-400" /> },
    { name: "Python", icon: <SiPython className="w-10 h-10 text-blue-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-blue-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-blue-400" /> },
];

const miscellaneousSkills = [
    { name: "Git", icon: <SiGit className="w-10 h-10 text-blue-400" /> },
    { name: "Postman", icon: <SiPostman className="w-10 h-10 text-blue-400" /> },
    { name: "Figma", icon: <SiFigma className="w-10 h-10 text-blue-400" /> },
    { name: "Render", icon: <SiRender className="w-10 h-10 text-blue-400" /> },
    { name: "Jest", icon: <SiJest className="w-10 h-10 text-blue-400" /> },
    { name: "Docker", icon: <SiDocker className="w-10 h-10 text-blue-400" /> },
];

export function Skills() {
    return (
        <section
            id="skills"
            className="relative bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-4rem)] xl:min-h-screen flex flex-col items-center justify-center px-4 py-36 xl:py-0"
        >
            <div className="text-center mb-[2rem] max-w-7xl w-full">
                <h1 className="text-5xl font-bold mb-18">
                    Skills<span className="text-blue-400">.</span>
                </h1>
                <div className="flex items-center justify-center flex-wrap gap-10">
                    <Card className="w-full max-w-sm min-h-[26rem]">
                        <CardHeader>
                            <CardTitle className="font-semibold text-lg">Front-end</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="flex flex-wrap justify-center items-center gap-1 text-gray-700 dark:text-gray-300">
                                {frontendSkills.map(({ name, icon }) => (
                                    <li
                                        key={name}
                                        className="flex flex-col items-center justify-center w-24 h-24"
                                    >
                                        {icon}
                                        <span className="mt-2 text-center text-gray-600 dark:text-gray-400">{name}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="w-full max-w-sm min-h-[26rem]">
                        <CardHeader>
                            <CardTitle className="font-semibold text-lg">Back-end</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="flex flex-wrap justify-center items-center gap-1 text-gray-700 dark:text-gray-300">
                                {backendSkills.map(({ name, icon }) => (
                                    <li
                                        key={name}
                                        className="flex flex-col items-center justify-center w-24 h-24"
                                    >
                                        {icon}
                                        <span className="mt-2 text-center text-gray-600 dark:text-gray-400">{name}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="w-full max-w-sm min-h-[26rem]">
                        <CardHeader>
                            <CardTitle className="font-semibold text-lg">Miscellaneous</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="flex flex-wrap justify-center items-center gap-1 text-gray-700 dark:text-gray-300">
                                {miscellaneousSkills.map(({ name, icon }) => (
                                    <li
                                        key={name}
                                        className="flex flex-col items-center justify-center w-24 h-24"
                                    >
                                        {icon}
                                        <span className="mt-2 text-center text-gray-600 dark:text-gray-400">{name}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                </div>
            </div>
            <DownArrow href="#projects" />
        </section>
    );
}

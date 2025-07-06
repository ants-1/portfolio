"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { UpArrow } from "./up-arrow";
import { Badge } from "./ui/badge";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Roofsy - Real Estate App",
    description:
      "A full-stack real estate platform built with Next.js, TypeScript, and Supabase. Features include property listings, user authentication, image uploads, advanced search, and secure payments. Designed with TailwindCSS and integrated with PostgreSQL for robust data management.",
    image: "/roofsy.jpeg",
    technologies: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "PostgreSQL"],
    liveUrl: "https://roofsy.vercel.app/",
    codeUrl: "https://github.com/ants-1/roofsy",
  },
  {
    id: 2,
    title: "Linko - Travel Blog and Chat App",
    description:
      "A full-stack social blogging platform for travelers to share stories and chat in real time. Built with React, Node.js, Express, and Socket.io for instant messaging. Uses MongoDB for flexible data storage and TypeScript for strong typing. Includes authentication, blog CRUD, and Material UI design.",
    image: "/linko.jpeg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "TypeScript", "Material UI", "Redux"],
    liveUrl: "https://linko-3w76.onrender.com/",
    codeUrl: "https://github.com/ants-1/linko",
  },
  {
    id: 3,
    title: "CalCountAI - Calorie Tracker App",
    description:
      "A mobile-friendly AI-powered calorie tracking app developed with React Native and Express. Supports food logging, daily tracking, and health insights. Integrates a Python Flask service for AI chatbot. Data is stored in MongoDB with secure Node.js endpoints. Styled with Tailwind CSS (NativeWind).",
    image: "/calcountai.jpeg",
    technologies: [
      "React Native",
      "MongoDB",
      "Express",
      "Tailwind CSS (NativeWind)",
      "Node.js",
      "TypeScript",
      "Flask",
      "Python",
      "Expo Go",
    ],
    liveUrl: "",
    codeUrl: "https://github.com/ants-1/calcountai",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative dark:bg-black min-h-[calc(100vh-4rem)] xl:min-h-screen flex flex-col items-center justify-center px-4 py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-[2rem] p-5"
      >
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-blue-400">Projects</span>.
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-20 max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-full sm:w-[600px] h-auto sm:min-h-[500px] group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 pt-0">
              <div className="w-full h-48 sm:h-72 bg-gray-100 dark:bg-gray-800 rounded-t-lg overflow-hidden flex items-center justify-center border-b">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={`w-full h-full ${project.id === 3 ? "object-contain" : "object-cover"}`}
                  />
                ) : (
                  <span className="text-gray-400">No image available</span>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-400">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 ">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.liveUrl && (
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Site
                      </Link>
                    </Button>
                  )}

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
                  >
                    <Link
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <SiGithub className="w-4 h-4" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <UpArrow href="#home" />
      </motion.div>
    </section>
  );
}

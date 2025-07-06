"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { useState, useEffect } from "react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const links: { title: string, href: string }[] = [
    {
        title: "Home",
        href: "#home",
    },
    {
        title: "About",
        href: "#about-me",
    },
    {
        title: "Skills",
        href: "#skills",
    },
    {
        title: "Projects",
        href: "#projects"
    },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "0px 0px -70% 0px",
            }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);


    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between px-4">
                <Link href="#index" className="flex items-center space-x-2">
                    <span className="font-bold text-2xl text-blue-400">AS</span>
                </Link>

                <div className="flex items-center gap-2 md:gap-6">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-2">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center space-x-1 text-sm lg:text-base transition-colors p-2 hover:bg-gray-100 hover:dark:bg-gray-900 hover:text-blue-400 rounded-lg ${activeId === link.href.replace("#", "") ? "text-blue-800 font-semibold" : ""
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </nav>


                    {/* Mobile Navigation */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" className="cursor-pointer" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[250px] sm:w-[300px] px-4">
                            <SheetHeader className="pb-0">
                                <SheetTitle className="flex items-center space-x-2">
                                    <span className="font-bold text-xl text-blue-400">AS</span>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col space-y-1 px-4">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`flex items-center space-x-1 transition-colors p-2 hover:bg-gray-100 hover:dark:bg-gray-900 hover:text-blue-400 rounded-lg ${activeId === link.href.replace("#", "") ? "text-blue-800" : ""
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span>{link.title}</span>
                                    </Link>
                                ))}

                            </div>
                        </SheetContent>
                    </Sheet>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
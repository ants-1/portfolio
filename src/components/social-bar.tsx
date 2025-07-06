"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";

export function SocialBar() {
    return (
        <div className="flex gap-4 mt-8">
            <Link href="https://github.com/ants-1">
                <SiGithub className="w-6 h-6 hover:text-blue-400 hover:cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/in/anthony-salisbury-3a1a06296/">
                <SiLinkedin className="w-6 h-6 hover:text-blue-400 hover:cursor-pointer" />
            </Link>
        </div>
    )
}
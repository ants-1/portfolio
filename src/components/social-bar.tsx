"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";

export function SocialBar() {
    return (
        <div className="flex gap-4 mt-8">
            <SiGithub className="w-6 h-6 hover:text-blue-400 hover:cursor-pointer"/>
            <SiLinkedin className="w-6 h-6 hover:text-blue-400 hover:cursor-pointer" />
        </div>
    )
}
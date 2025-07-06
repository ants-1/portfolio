"use client";

import { ChevronsDown } from "lucide-react";
import Link from "next/link";

type DownArrowProps = {
  href: string;
};

export function DownArrow({ href }: DownArrowProps) {
  return (
    <Link
      href={href}
      className="absolute bottom-10 rounded-full p-2 hover:text-blue-400 hover:bg-gray-200 hover:dark:bg-gray-800 cursor-pointer transition animate-bounce"
    >
      <ChevronsDown className="w-8 h-8" />
    </Link>
  );
}

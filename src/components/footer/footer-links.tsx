"use client";

import { Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function FooterLinks({
    title,
    links,
  }: {
    title: string;
    links: { label: string; href: string }[];
  }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="border-b lg:border-none border-gray-800 pb-4 lg:pb-0">
        <button
          className="flex items-center justify-between w-full lg:cursor-default"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="font-semibold text-sm text-gray">{title}</h3>
          <span className="lg:hidden">
            {isOpen ? (
              <Minus className="h-5 w-5" />
            ) : (
              <Plus className="h-5 w-5" />
            )}
          </span>
        </button>
        <ul className={`mt-4 space-y-2 ${isOpen ? "block" : "hidden"} lg:block`}>
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-gray-400 hover:text-white text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
}

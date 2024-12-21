import Link from "next/link";
import React from "react";

export default function SubMenu({
  subLinks,
}: {
  subLinks: { label: string; href: string }[];
}) {
  return (
    <nav className="bg-primary-light py-2 hidden xl:block">
      <div className="container px-10 py-2">
        <ul className="flex space-x-6">
          {subLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition duration-150 ease-in-out"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

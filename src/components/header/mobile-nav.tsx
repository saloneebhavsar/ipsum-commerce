"use client";

import Link from "next/link";
import data from "./data";
import { useEffect } from "react";

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 p-4 lg:hidden ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      } transition-opacity duration-300 ease-in-out`}
    >
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      <nav className="bg-gray-900 absolute left-0 top-0 h-full w-64 overflow-y-auto bg-primary p-4 text-white">
        <ul className="space-y-2">
          {data.map(({ label, subLinks }) => (
            <li key={label}>
              <button className="hover:bg-gray-800 w-full rounded-md px-4 py-2 text-left">
                {label}
              </button>
              {subLinks && (
                <ul className="ml-4 mt-2 space-y-2">
                  {subLinks.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="hover:bg-gray-800 block px-4 py-2"
                        onClick={onClose}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

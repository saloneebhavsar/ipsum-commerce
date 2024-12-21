"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import data from "./data";
import FooterLinks from "./footer-links";
import Newsletter from "./newsletter";
import SocialLink from "./social-link";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: Instagram,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com",
    icon: Linkedin,
  },
  {
    label: "X",
    href: "https://www.x.com",
    icon: Twitter,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com",
    icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container">
        <Newsletter />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 py-12">
          <div className="lg:col-span-3">
            <Link href="/" className="text-2xl font-black mr-6">
              IPSUM
            </Link>
            <p className="text-gray-400 my-6">
              Delivering unique and complete solutions for your business.
            </p>
          </div>
          <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-4 gap-8">
            {data.map((section) => (
              <FooterLinks key={section.title} {...section} />
            ))}
          </div>
        </div>
        <div className="px-4 py-6 border-t border-primary-lighter">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-gray">
              © 2024 Ipsum Industries. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {socials.map(({ label, href, icon }) => (
                <SocialLink key={label} label={label} href={href} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

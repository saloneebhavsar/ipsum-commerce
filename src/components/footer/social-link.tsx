import Link from "next/link";
import React from "react";

export default function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="text-gray hover:text-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{label}</span>
      <Icon className="h-6 w-6" />
    </Link>
  );
}

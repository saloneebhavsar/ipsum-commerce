import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Breadcrumbs() {
  return (
      <nav className="py-4 mb-2 text-primary-light text-sm">
        <ul className="list-none p-0 inline-flex flex-wrap">
          <li className="flex items-center">
            <Link href="/" className="underline hover:text-primary">
              Browse Categories
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
          </li>
          <li className="flex items-center">
            <Link href="/" className="underline hover:text-primary">
              Lubricants
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
          </li>
          <li className="text-primary">Hydraulic Fluids</li>
        </ul>
      </nav>
  );
}

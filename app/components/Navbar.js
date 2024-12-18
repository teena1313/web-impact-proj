"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  if (!pathname.includes("/studio")) {
    return (
      <nav className="border-b sticky top-0 bg-violet text-primary-100 border-primary-800 z-10">
        <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
          <Link href="/" className="font-medium text-lg md:hover:underline">
            My Website
          </Link>
          <ul className="hidden md:flex items-center justify-end space-x-4 text-sm font-medium">
            <li className="md:hover:underline">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="md:hover:underline">
              <Link href="/photos">Photos</Link>
            </li>
            <li className="md:hover:underline">
              <Link href="/miniProj">Mini Projects</Link>
            </li>
            <li className="md:hover:underline">
              <Link href="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}

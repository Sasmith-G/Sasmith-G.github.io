"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import HashLink from "@/components/HashLink";

const links = [
  { title: "Home", link: "/#hero" },
  { title: "Projects", link: "/#projects" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (link: string) =>
    `${pathname === link ? "brightness-100" : "brightness-75"} transition-colors duration-200`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[100px] backdrop-blur-xl">
      {/* Mobile */}
      <div className="lg:hidden flex justify-between w-full items-center px-5 pt-10 pb-5">
        <Link href="/" className="font-logo text-3xl translate-y-[10px]">
          Sasmith
        </Link>
        {!open && (
          <div className="flex gap-3 items-center">
            <HashLink
              href="/#contact"
              className="px-3 py-2 hidden sm:block text-white bg-[rgb(65,64,64)] sm:px-5 sm:py-2 rounded-xl active:bg-blue-500"
            >
              Let&apos;s Talk
            </HashLink>
            <div onClick={() => setOpen(true)} className="cursor-pointer">
              <Menu />
            </div>
          </div>
        )}
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`lg:hidden cursor-pointer absolute z-50 transition-all top-12 right-5 ${open ? "" : "-translate-y-[1000px]"}`}
      >
        <X />
      </div>
      <div
        className={`lg:hidden transition-all flex flex-col gap-3 absolute z-50 px-6 w-full h-screen backdrop-blur-xl ${open ? "" : "-translate-x-[2000px]"}`}
      >
        <div className="flex flex-col gap-5 pt-5 text-white">
          {links.map((l) => (
            <HashLink key={l.title} href={l.link} className={linkClass(l.link)} onClick={() => setOpen(false)}>
              {l.title}
            </HashLink>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <nav className="relative mx-auto hidden h-full max-w-[1300px] items-center justify-between px-[23px] pt-5 lg:flex">
        <Link href="/" className="font-logo text-[30px] leading-none text-white translate-y-[10px]">
          Sasmith
        </Link>

        <ul className="absolute left-1/2 flex -translate-x-1/2 items-center gap-10">
          {links.map((l) => (
            <li key={l.title}>
              <HashLink href={l.link} className={`text-[16px] font-medium text-white hover:brightness-100 ${linkClass(l.link)}`}>
                {l.title}
              </HashLink>
            </li>
          ))}
        </ul>

        <HashLink
          href="/#contact"
          className="flex h-10 items-center rounded-[10px] bg-[#414040] px-5 text-[16px] font-medium text-white active:bg-blue-500"
        >
          Let&apos;s Talk
        </HashLink>
      </nav>
    </header>
  );
}

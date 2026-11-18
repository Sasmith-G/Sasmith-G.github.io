"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

// Link to a section ("#contact" or "/#contact"). Always scrolls, even when the URL already
// has that hash (a plain Next.js <Link> does nothing in that case). From other pages it
// navigates home first and the browser scrolls to the section.
export default function HashLink({ href, onClick, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    // let the browser handle new-tab / new-window clicks
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const id = href.split("#")[1];
    // Check the route, not just the element: Next.js keeps the home page mounted but hidden
    // after navigating away, so its sections still exist in the DOM on other pages.
    if (pathname === "/" && id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    } else {
      router.push(href.startsWith("/") ? href : `/${href}`);
    }
  };

  return <a href={href} onClick={handleClick} {...props} />;
}

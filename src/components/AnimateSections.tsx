"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

// Same entrance as the reference: every .animate-section scales/fades in on page load.
// Render it inside the page (not the layout) so it runs only after the page's own
// markup has hydrated; animating earlier causes a hydration mismatch.
export default function AnimateSections() {
  const pathname = usePathname();

  useEffect(() => {
    document.querySelectorAll(".animate-section").forEach((el) => {
      gsap.fromTo(el, { scale: 0.75, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.75, ease: "power1.out" });
    });
  }, [pathname]);

  return null;
}

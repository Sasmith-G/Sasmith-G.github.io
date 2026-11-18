"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const link = "#contact";

const items = Array.from({ length: 12 });

// Scroll speed (30% slower than the original bar's 137px/s), kept constant regardless of text length
const PX_PER_SECOND = 96;

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const distance = track.scrollWidth / 2;
    const tween = gsap.to(track, { x: -distance, ease: "none", duration: distance / PX_PER_SECOND, repeat: -1 });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="animate-section card flex h-[60px] items-center overflow-hidden rounded-[30px]">
      <div ref={trackRef} className="inline-flex items-center whitespace-nowrap">
        {items.map((_, i) => (
          <a key={i} href={link} className="mr-3 flex shrink-0 items-center gap-2 text-[14px] font-semibold uppercase">
            <Image src="/dot.svg" alt="Dot" width={16} height={16} className="w-4" />
            <p className="tracking-tight text-[#8a8a8a]">Currently</p>
            <p className="text-white">Open to Opportunities</p>
          </a>
        ))}
      </div>
    </div>
  );
}

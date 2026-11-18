"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Card, Star } from "@/components/ui";
import CertCard from "@/components/CertCard";
import { certifications } from "@/data/certifications";

// Slow drift; the strip pauses on hover so a card can be read or clicked
const PX_PER_SECOND = 40;

export default function Certifications() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Two identical halves: moving from 0 to -half and repeating loops seamlessly (cards travel right → left)
    const half = track.scrollWidth / 2;
    tweenRef.current = gsap.fromTo(
      track,
      { x: 0 },
      { x: -half, ease: "none", duration: half / PX_PER_SECOND, repeat: -1 },
    );
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <div id="certifications" className="animate-section w-full scroll-mt-32">
      <Card className="max-h-fit flex flex-col gap-5">
        <Link href="/certifications" className="flex w-fit items-center gap-1 group">
          <h1 className="uppercase text-lg tracking-tighter">Certifications</h1>
          <Star className="size-7 group-hover:brightness-100" />
        </Link>
        <div
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
          onMouseEnter={() => tweenRef.current?.pause()}
          onMouseLeave={() => tweenRef.current?.resume()}
        >
          <div ref={trackRef} className="flex w-max">
            {[0, 1].map((half) => (
              <div key={half} className="flex gap-3 pr-3" aria-hidden={half === 1}>
                {certifications.map((cert, i) => (
                  <CertCard key={i} cert={cert} className="w-[360px] shrink-0" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

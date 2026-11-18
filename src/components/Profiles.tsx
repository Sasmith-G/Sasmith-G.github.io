import Image from "next/image";
import { SectionHeading } from "@/components/TimelineCard";

const profiles = [
  { name: "Leetcode", icon: "/profiles/leetcode.png", w: 42, h: 50, rowH: 60, desc: "300+ Problems Solved, 100 Days Badge 2026", href: "https://leetcode.com/u/sasmith456/" },
  { name: "Github", icon: "/profiles/github.png", w: 42, h: 42, rowH: 62, desc: "Full-Stack, Cloud & AI Projects", href: "https://github.com/Sasmith-G" },
  { name: "CodeChef", icon: "/profiles/codechef.png", w: 50, h: 17, rowH: 62, desc: "Rated Contestant, Max Rating of 1210", href: "https://www.codechef.com/users/sasmith456" },
  { name: "Monkeytype", icon: "/profiles/monkeytype.png", w: 50, h: 30, rowH: 84, desc: "150+ WPM Peak, 1+ Year of Consistent Practice", href: "https://monkeytype.com/profile/SmoothOperator69" },
];

export default function Profiles() {
  return (
    <section id="profiles" className="animate-section card mt-5 scroll-mt-32 px-5 pb-[3px] pt-[21px]">
      <SectionHeading>Profiles</SectionHeading>
      <ul className="mt-[18px]">
        {profiles.map((p) => (
          <li key={p.name} className="grid grid-cols-[432px_374px_1fr] items-center" style={{ height: p.rowH }}>
            <a href={p.href} target="_blank" className="flex items-center gap-3">
              <div className="flex w-[50px] justify-center">
                <Image src={p.icon} alt={`${p.name} logo`} width={p.w} height={p.h} />
              </div>
              <span className="text-[16px] font-medium text-white">{p.name}</span>
            </a>
            <span className="text-center text-[16px] font-semibold text-[#8a8a8a]">{p.desc}</span>
            <a href={p.href} target="_blank" className="text-right text-[16px] font-medium text-white">
              Visit
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

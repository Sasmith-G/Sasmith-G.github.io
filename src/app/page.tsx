import Image from "next/image";
import HashLink from "@/components/HashLink";
import type { ReactNode } from "react";
import { FileBadge, Mail } from "lucide-react";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AnimateSections from "@/components/AnimateSections";
import { Star } from "@/components/ui";
import Certifications from "@/components/Certifications";
import { LinkedinIcon, WhatsappIcon } from "@/components/icons";
import SelfSummary from "@/components/SelfSummary";
import TimelineCard, { type TimelineItem } from "@/components/TimelineCard";
import Profiles from "@/components/Profiles";
import Achievements from "@/components/Achievements";
import Toolkit from "@/components/Toolkit";

function Card({
  href,
  label,
  title,
  children,
  className = "",
}: {
  href: string;
  label: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <HashLink href={href} className={`animate-section card relative block overflow-hidden ${className}`}>
      {children}
      <div className="absolute bottom-[22px] left-5">
        <p className="text-[12px] font-semibold uppercase tracking-tight text-[#8f8f8f]">{label}</p>
        <p className="text-[20px] font-medium leading-tight text-white">{title}</p>
      </div>
      <Star className="absolute bottom-6 right-5" />
    </HashLink>
  );
}

const stats = [
  { value: "30+", label: "Projects Completed" },
  { value: "6+", label: "Programming Languages" },
  { value: "3,00,000+", label: "Lines of Code Written" },
];

const experience: TimelineItem[][] = [
  [
    {
      date: "Jun 2026 - Sep 2026",
      title: "Software Engineering Intern",
      subtitle: "Proteam Advisory Solutions (Hybrid)",
      points: [
        "Engineered a rule-based classification engine in Python and FastAPI that normalizes, classifies, and detects duplicate machine-level software installations for an enterprise Software Asset Management (SAM) platform.",
        "Built and extended REST APIs and PostgreSQL schemas with FastAPI, Pydantic, and SQLAlchemy, and designed asynchronous background pipelines with Celery and Redis to process large-scale software inventories and auto-generate Excel compliance reports.",
        "Delivered full-stack features end-to-end, building responsive interfaces in Next.js and React and containerizing backend services with Docker, while shipping production-ready code through structured code review.",
      ],
    },
  ],
];

const education: TimelineItem[][] = [
  [
    {
      date: "2023 - 2027",
      title: "B.tech in Computer Science and Engineering",
      subtitle: "Vellore Institute of Technology, Chennai",
    },
    { date: "2021 - 2023", title: "Intermediate", subtitle: "Narayana Junior College, Hyderabad" },
  ],
];

export default function Home() {
  return (
    <main className="mx-auto w-[1160px] pb-[60px] pt-[140px]">
      <div id="hero" className="scroll-mt-32">
        {/* Row 1 */}
        <section className="grid grid-cols-4 grid-rows-[60px_234px] gap-5">
          <HashLink href="#about" className="animate-section card relative col-span-2 row-span-2 flex p-6">
            <div
              className="h-[250px] w-[250px] shrink-0 rounded-br-[30px] bg-[#2f2d2d] bg-cover bg-center"
              style={{ backgroundImage: "url(/profile.jpg)" }}
            />
            <div className="pl-6 pt-[30px]">
              <p className="text-[13px] font-semibold uppercase tracking-tight text-[#b0b0b0]">
                Systems + AI Engineer
              </p>
              <h1 className="mt-[22px] text-[36px] font-medium leading-none text-white">Sasmith G</h1>
              <p className="mt-[22px] w-[170px] text-[15px] font-medium leading-6 text-[#a8a8a8]">
                Aspiring Systems + AI Engineer building real-world intelligent systems.
              </p>
            </div>
            <Star className="absolute bottom-6 right-6" />
          </HashLink>

          <div className="col-span-2">
            <Marquee />
          </div>

          <Card href="#projects" label="Showcase" title="Projects">
            <p className="absolute inset-x-0 top-[18px] text-center text-[22px] font-extrabold uppercase leading-none tracking-wider text-[#6f6f6f]">
              My Works
            </p>
            <Image
              src="/projects-preview-mediaflow.png"
              alt="MediaFlow"
              width={196}
              height={98}
              className="absolute left-1/2 top-[50px] -translate-x-1/2 rounded-[10px] border border-[#2e2e2e]"
            />
          </Card>

          <Card href="#toolkit" label="Toolkit" title="Technologies">
            <Image
              src="/technologies.png"
              alt="Technologies"
              width={148}
              height={144}
              className="absolute left-1/2 top-[17px] -translate-x-1/2"
            />
          </Card>
        </section>

        {/* Row 2 */}
        <section className="mt-5 grid h-[236px] grid-cols-4 gap-5">
          <Card href="#profiles" label="Programming" title="Profiles">
            <Image
              src="/profile-marks.png"
              alt="Coding profiles"
              width={238}
              height={84}
              className="absolute left-1/2 top-[53px] -translate-x-1/2"
            />
          </Card>

          <ContactCard />

          <Card href="#certifications" label="Learning" title="Certifications">
            <FileBadge
              size={96}
              strokeWidth={1.75}
              className="absolute left-1/2 top-[40px] -translate-x-1/2 text-[#c0c0c0]"
            />
          </Card>
        </section>

        {/* Row 3 */}
        <section className="animate-section card mt-5 grid grid-cols-3 gap-3 p-5">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card flex h-[160px] flex-col items-center justify-center">
              <p className="text-[34px] font-medium leading-none text-white">{stat.value}</p>
              <p className="mt-[14px] text-[14px] font-semibold uppercase tracking-tight text-[#8a8a8a]">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* Row 4 */}
        <section className="mt-5 grid h-[255px] grid-cols-2 gap-5">
          <Card href="#about" label="My Journey" title="About Me">
            <div
              className="absolute left-1/2 top-[36px] h-[140px] w-[240px] -translate-x-1/2 bg-contain bg-center bg-no-repeat opacity-90"
              style={{ backgroundImage: "url(/signature.png)" }}
            />
          </Card>

          <LetsConnect />
        </section>
      </div>

      <div id="about" className="scroll-mt-32">
        <SelfSummary />
        <TimelineCard heading="Experience" columns={experience} />
        <TimelineCard heading="Education" columns={education} />
        <Profiles />
        <Achievements />
        <div className="mt-5">
          <Toolkit />
        </div>

        <div className="mt-5">
          <Certifications />
        </div>
      </div>

      <div className="mt-[100px]">
        <Projects />
        <Contact />
      </div>
      <AnimateSections />
    </main>
  );
}

const contactLinks = [
  { label: "Email", href: "mailto:gsasmith456@gmail.com", Icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/917671979406", Icon: WhatsappIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sasmith-g-379405284/", Icon: LinkedinIcon },
];

// Each icon opens its own link; the footer row scrolls to the contact section
function ContactCard() {
  return (
    <div className="animate-section card relative col-span-2 block overflow-hidden">
      <div className="absolute inset-x-0 top-[68px] flex justify-center items-center gap-[22px] text-[#c0c0c0]">
        {contactLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            aria-label={label}
            className="brightness-75 hover:brightness-100"
          >
            <Icon width={56} height={56} strokeWidth={2} className="xl:size-[60px]" />
          </a>
        ))}
      </div>
      <HashLink href="#contact" className="absolute inset-x-5 bottom-6 flex items-center justify-between">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-tight text-[#8f8f8f]">Message Me</p>
          <p className="text-[20px] font-medium leading-tight text-white">Contact</p>
        </div>
        <Star />
      </HashLink>
    </div>
  );
}

function LetsConnect() {
  return (
    <HashLink href="#contact" className="animate-section card relative block min-h-[200px] overflow-hidden">
      <Image
        src="/dropstar.svg"
        alt="dropstar"
        width={20}
        height={100}
        className="absolute top-0 left-5 w-[4vw] md:w-[50px] min-w-[20px]"
      />
      <div className="absolute inset-x-5 bottom-[40px] flex items-center justify-between">
        <p className="text-[30px] font-medium leading-[36px] text-white">
          Let&apos;s
          <br />
          <span className="text-blue-500">Connect.</span>
        </p>
        <Star />
      </div>
    </HashLink>
  );
}

import { ItemDetails, SectionHeading, type TimelineItem } from "@/components/TimelineCard";

// The grey top line shows the kind of achievement (no dates were recorded for these)
const columns: TimelineItem[][] = [
  [
    {
      date: "Hackathon",
      title: "1st Place",
      subtitle: "IIT Hyderabad \"Data Science with Python\" Hackathon",
      description:
        "Secured first place among numerous competing teams by building and presenting a highly accurate predictive model within an 8-hour timeframe.",
    },
  ],
  [
    {
      date: "Summer Internship",
      title: "Top Performer, 100% Score",
      subtitle: "IBM Generative AI Program",
      description:
        "Achieved a 100% score on all tests of IBM's Generative AI summer internship, demonstrating a complete understanding of core GenAI principles and applications.",
    },
  ],
];

export default function Achievements() {
  return (
    <section id="achievements" className="animate-section card mt-5 scroll-mt-32 px-5 pb-5 pt-[21px]">
      <SectionHeading>Achievements</SectionHeading>
      <div className="mt-1 grid grid-cols-2 gap-[13px]">
        {columns.map((column, i) => (
          <div key={i} className="panel flex flex-col gap-8 px-5 pb-5 pt-[21px]">
            {column.map((item) => (
              <div key={item.subtitle}>
                <p className="text-[16px] font-semibold leading-5 text-[#8a8a8a]">{item.date}</p>
                <p className="mt-2 text-[18px] font-medium leading-6 text-white">{item.title}</p>
                <p className="mt-2 text-[16px] font-semibold leading-5 text-[#8a8a8a]">{item.subtitle}</p>
                <ItemDetails item={item} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export type TimelineItem = {
  date: string;
  title: string;
  subtitle: string;
  // Optional detail shown under the entry
  description?: string;
  points?: string[];
};

export function ItemDetails({ item }: { item: TimelineItem }) {
  return (
    <>
      {item.description && (
        <p className="mt-3 text-[15px] font-medium leading-6 text-[#a8a8a8]">{item.description}</p>
      )}
      {item.points && (
        <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-[15px] font-medium leading-6 text-[#a8a8a8] marker:text-[#6f6f6f]">
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export function SectionHeading({ children }: { children: string }) {
  return <h2 className="text-[18px] font-medium uppercase leading-6 text-white">{children}</h2>;
}

function Item({ item }: { item: TimelineItem }) {
  return (
    <div>
      <p className="text-[15px] font-semibold leading-5 text-[#8a8a8a]">{item.date}</p>
      <p className="mt-[7px] text-[18px] font-medium leading-6 text-white">{item.title}</p>
      <p className="mt-[9px] text-[15px] font-semibold leading-5 text-[#8a8a8a]">{item.subtitle}</p>
      <ItemDetails item={item} />
    </div>
  );
}

export default function TimelineCard({
  heading,
  columns,
}: {
  heading: string;
  columns: TimelineItem[][];
}) {
  return (
    <section className="animate-section card mt-5 px-5 pb-[22px] pt-[21px]">
      <SectionHeading>{heading}</SectionHeading>
      <div className={`mt-[25px] grid gap-x-6 ${columns.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
        {columns.map((column, i) => (
          <div key={i} className="flex flex-col gap-7">
            {column.map((item) => (
              <Item key={item.title} item={item} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

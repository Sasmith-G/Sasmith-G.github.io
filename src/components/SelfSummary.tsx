import Image from "next/image";

export default function SelfSummary() {
  return (
    <section className="animate-section mt-[100px] flex gap-5">
      <div className="card h-[290px] w-[275px] shrink-0 p-5">
        <div
          className="h-[250px] w-[235px] rounded-[20px] bg-[#2f2d2d] bg-cover bg-center"
          style={{ backgroundImage: "url(/profile.jpg)" }}
        />
      </div>

      <div className="flex-1">
        <div className="flex h-[60px] items-center justify-center gap-5">
          <Image src="/starburst.png" alt="" width={50} height={50} />
          <h2 className="text-[60px] font-medium uppercase leading-none text-white">Self Summary</h2>
          <Image src="/starburst.png" alt="" width={50} height={50} />
        </div>

        <div className="card relative mt-5 h-[208px] pl-5 pr-[30px] pt-[21px]">
          <Image src="/dropstar.svg" alt="dropstar" width={25} height={51} className="absolute right-5 top-0 w-[25px]" />
          <h3 className="text-[30px] font-medium leading-9 text-white">Sasmith Goduguluri</h3>
          <p className="mt-3 text-[16px] font-medium leading-6 text-[#c4c4c4]">
            I&apos;m a Systems + AI Engineer focused on building intelligent, scalable systems from concept to
            production. I work across AI pipelines, backend architecture, and full-stack development, creating
            reliable software with clean and intuitive user experiences. Driven by curiosity and strong engineering
            fundamentals, I enjoy transforming complex ideas into practical, real-world products while continuously
            refining my skills through building, experimentation, and learning.
          </p>
        </div>
      </div>
    </section>
  );
}

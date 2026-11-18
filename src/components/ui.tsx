import Image from "next/image";
import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`text-white min-h-[200px] max-h-[350px] rounded-3xl bg-gradient-to-br from-[rgb(33,33,33)] via-[rgb(25,25,25)] to-[rgb(19,19,19)] p-5 ${className}`}
    >
      {children}
    </div>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/star.svg"
      alt="dot"
      width={40}
      height={40}
      className={`brightness-75 hover:brightness-100 cursor-pointer ${className}`}
    />
  );
}

export function CardFooter({ category, title }: { category: string; title: string }) {
  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <p className="uppercase text-[12px] brightness-50 tracking-tighter">{category}</p>
        <p className="text-xl">{title}</p>
      </div>
      <Star />
    </div>
  );
}

export function Title({
  title,
  className = "",
  titleClassName = "",
  blue = false,
}: {
  title: string;
  className?: string;
  titleClassName?: string;
  blue?: boolean;
}) {
  const spike = blue ? "/blue-spike.svg" : "/spike.svg";
  return (
    <div className={`gap-5 items-center ${className}`}>
      <Image src={spike} alt="spike" width={30} height={30} className="xl:size-[50px]" />
      <p className={`uppercase text-2xl xl:text-6xl ${titleClassName}`}>{title}</p>
      <Image src={spike} alt="spike" width={30} height={30} className="xl:size-[50px]" />
    </div>
  );
}

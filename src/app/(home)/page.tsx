"use client";
import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        alt="Até 55% de desconto"
        height={0}
        width={0}
        sizes="100w"
        className="h-auto w-full"
      />
      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
}

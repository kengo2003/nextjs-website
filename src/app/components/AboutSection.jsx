"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML/CSS</li>
        <li>NextJS</li>
        <li>PHP</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "SNS",
    id: "SNS",
    content: (
      <ul className="list-disc pl-2">
        <li>X</li>
        <li>instagram</li>
      </ul>
    ),
  },
  {
    title: "Experrience",
    id: "Experrience",
    content: (
      <ul className="list-disc pl-2">
        <li>ITパスポート</li>
        <li>基本情報試験</li>
        <li>応用情報試験</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image src="/image/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            You put on your best 'fit to the club tonight You're tryna find
            someone to take you home and show you love If nobody else will, then
            I will If nobody will, I will, mm
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("SNS")}
              active={tab === "SNS"}
            >
              {" "}
              SNS{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experrience")}
              active={tab === "Experrience"}
            >
              {" "}
              Experrience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

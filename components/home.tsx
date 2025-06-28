"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "./FadeInSection";

export default function HomeSection() {
  return (
    <div
      id="home"
      className="flex items-center justify-center h-[100vh] mx-auto px-6 lg:justify-between max-w-5xl snap-start">
      <div className="flex flex-col text-white ">
        <h1 className="flex flex-wrap text-4xl md:text-6xl font-bold mb-4 text-start">
          Hello, I'm&nbsp;
          <FadeInSection>
            <span className="inline-block mx-2 text-orange-500">Aarush</span>
          </FadeInSection>
          👋
        </h1>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-start">
          Full Stack Developer
        </h1>
        <p className="text-lg md:text-xl max-w-xl text-zinc-400 mb-6 text-start">
          I build fast, responsive, and scalable web applications with clean,
          maintainable code.
        </p>
        <p className="text-lg md:text-xl max-w-xl text-zinc-400 mb-6 text-start">
          I focus on crafting intuitive user experiences and solving real-world
          problems through modern technologies.
        </p>

        <div className="flex flex-wrap gap-4 justify-start">
          <Link
            href="mailto:aarushkumar8585@gmail.com"
            className="px-6 py-2 rounded-full font-semibold text-white bg-[#f76c00] hover:opacity-90 transition">
            Lets connect
          </Link>
          <Link
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold border border-[#f76c00] text-[#f76c00] hover:bg-[#f76c00] hover:text-white transition">
            <Download size={18} />
            Resume
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 justify-start py-4">
          <a
            href="https://www.linkedin.com/in/aarush-kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#004182] transition">
            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>

          <a
            href="https://github.com/kraarush"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full ] hover:bg-[#181d22] transition">
            <Image src="/github.svg" alt="github" width={24} height={24} />
          </a>

          <a
            href="https://leetcode.com/u/kraarush709/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#c67d16] transition">
            <Image src="/leetcode.png" alt="github" width={24} height={24} />
          </a>

          <a
            href="https://www.instagram.com/_a.arush/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#c13584] transition">
            <Image src="/instagram.svg" alt="github" width={24} height={24} />
          </a>
        </div>
      </div>
      {/* My Image */}
      <div className="hidden  overflow-hidden  bg-black lg:block shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out ">
        <FadeInSection>
          <Image
            src="/photo.jpg"
            alt="Aarush's Profile"
            width={300}
            height={500}
            className="object-cover rounded-[10px] border-3 border-orange-500 transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </FadeInSection>
      </div>
    </div>
  );
}

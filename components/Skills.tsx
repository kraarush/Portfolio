import Image from "next/image";
import FadeInSection from "./FadeInSection";
import { Card } from "./ui/card";
import { SectionHeader } from "./ui/SectionHeader";

export default async function Skills() {
  const response = await fetch(
    "https://backend.takeuforward.org/api/profile/user/leetcode/kraarush"
  );
  const { leetcode_data } = await response.json();
  return (
    <div
      id="skills"
      className="flex flex-col min-h-screen px-6 py-16 max-w-5xl mx-auto text-white items-start justify-center snap-start pt-[100px]">
      <FadeInSection>
        <SectionHeader title="Skills" />
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-4 mb-8 mx-auto w-full">
        <FadeInSection>
          <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 py-6">
            <p className="text-2xl font-bold text-white">Frontend</p>
            <div className="flex flex-wrap gap-4">
              <div className="relative group w-fit">
                <Image
                  src="/reactjs.svg"
                  alt="ReactJS Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />

                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  React
                </span>
              </div>
              <div className="relative group w-fit">
                <Image
                  src="/shadcn.svg"
                  alt="ShadCN Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                />

                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  ShadCN
                </span>
              </div>
              <div className="relative group w-fit">
                <Image
                  src="/tailwindcss.svg"
                  alt="TailwindCSS Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                />

                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  TailwindCSS
                </span>
              </div>

              <div className="relative group w-fit">
                <Image
                  src="/redux.svg"
                  alt="redux Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  Redux
                </span>
              </div>

                            <div className="relative group w-fit">
                <Image
                  src="/bootstrap.svg"
                  alt="bootstrap Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  bootstrap
                </span>
              </div>

            </div>
          </Card>
        </FadeInSection>

        <FadeInSection>
          <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-50 px-4">
            <p className="text-2xl font-bold text-white">Backend</p>
            <div className="flex flex-wrap gap-4">
              {/* Node.js */}
              <div className="relative group w-fit">
                <Image
                  src="/nodejs.svg"
                  alt="NodeJS Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  Node.js
                </span>
              </div>

              {/* PostgreSQL */}
              <div className="relative group w-fit">
                <Image
                  src="/postgresql.svg"
                  alt="PostgreSQL Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  PostgreSQL
                </span>
              </div>

              {/* MongoDB */}
              <div className="relative group w-fit">
                <Image
                  src="/mongo.svg"
                  alt="MongoDB Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  MongoDB
                </span>
              </div>

              <div className="relative group w-fit">
                <Image
                  src="/ejs.svg"
                  alt="ejs Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  EJS
                </span>
              </div>

            </div>
          </Card>
        </FadeInSection>

        <FadeInSection>
          <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-4">
            <p className="text-2xl font-bold text-white">DevOps / Tools</p>
            <div className="flex flex-wrap gap-4">
              {/* Git */}
              <div className="relative group w-fit">
                <Image
                  src="/git.svg"
                  alt="Git Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  Git
                </span>
              </div>

              {/* GitHub */}
              <div className="relative group w-fit">
                <Image
                  src="/github.svg"
                  alt="GitHub Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  GitHub
                </span>
              </div>

              {/* Docker */}
              <div className="relative group w-fit">
                <Image
                  src="/docker.svg"
                  alt="Docker Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  Docker
                </span>
              </div>

              <div className="relative group w-fit">
                <Image
                  src="/jenkins.svg"
                  alt="jenkins Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  Jenkins
                </span>
              </div>


              <div className="relative group w-fit">
                <Image
                  src="/postman.svg"
                  alt="postman Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  Postman
                </span>
              </div>
              

            </div>
          </Card>
        </FadeInSection>

        <FadeInSection>
          <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-4">
            <p className="text-2xl font-bold text-white">Language</p>
            <div className="flex flex-wrap gap-4">
              <div className="relative group w-fit">
                <Image
                  src="/c.png"
                  alt="C Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  C
                </span>
              </div>

              <div className="relative group w-fit">
                <Image
                  src="/c++.png"
                  alt="C++ Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  C++
                </span>
              </div>

              <div className="relative group w-fit">
                <Image
                  src="/java.svg"
                  alt="Java Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  Java
                </span>
              </div>

              <div className="relative group w-fit">
                <Image
                  src="/javascript.svg"
                  alt="JavaScript Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  JavaScript
                </span>
              </div>  

              <div className="relative group w-fit">
                <Image
                  src="/sql.svg"
                  alt="SQL Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  SQL
                </span>
              </div>
            </div>
          </Card>
        </FadeInSection>
      </div>

      <div className="w-full">
        <FadeInSection>
          <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 py-6 w-full rounded-2xl">
            <div className="flex flex-col space-y-2 mb-1">
              <h2 className="text-2xl font-bold text-white">
                Data Structures & Algorithms
              </h2>
              <div className="flex mt-1">
                <a
                  href="https://leetcode.com/u/kraarush709/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2">
                  <Image
                    src="/leetcode.png"
                    alt="github"
                    width={24}
                    height={24}
                  />
                  <p className="flex text-xl font-semibold text-orange-400 items-center">
                    LeetCode
                  </p>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-sm">
              <div className="bg-zinc-800 p-5 rounded-xl flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-green-400">
                  {leetcode_data.totalSolved}
                </span>
                <span className="text-gray-300 mt-1">Total Solved</span>
                <span className="text-xs text-gray-500 mt-1">
                  {leetcode_data.totalQuestions} Total Qs
                </span>
              </div>

              <div className="bg-zinc-800 p-5 rounded-xl flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-blue-400">
                  {leetcode_data.easySolved}
                </span>
                <span className="text-gray-300 mt-1">Easy</span>
                <span className="text-xs text-gray-500 mt-1">
                  {leetcode_data.totalEasy} Total
                </span>
              </div>

              <div className="bg-zinc-800 p-5 rounded-xl flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-yellow-400">
                  {leetcode_data.mediumSolved}
                </span>
                <span className="text-gray-300 mt-1">Medium</span>
                <span className="text-xs text-gray-500 mt-1">
                  {leetcode_data.totalMedium} Total
                </span>
              </div>

              <div className="bg-zinc-800 p-5 rounded-xl flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-red-400">
                  {leetcode_data.hardSolved}
                </span>
                <span className="text-gray-300 mt-1">Hard</span>
                <span className="text-xs text-gray-500 mt-1">
                  {leetcode_data.totalHard} Total
                </span>
              </div>
            </div>
          </Card>
        </FadeInSection>
      </div>
    </div>
  );
}

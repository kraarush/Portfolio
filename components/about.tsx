import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/card";
import FadeInSection from "./FadeInSection";

export const metadata: Metadata = {
  title: "About | Aarush Kumar",
  description:
    "Get to know more about me – background, interests, and journey.",
};

export default function AboutPage() {
  return (
    <main
      id="aboutme"
      className="min-h-screen px-6 py-16 max-w-5xl mx-auto text-white snap-start pt-[100px]">
      <FadeInSection>
        <SectionHeader title="About Me" />
      </FadeInSection>

      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        I’m a{" "}
        <span className="font-semibold text-gray-200">
          full-stack developer
        </span>{" "}
        pursuing B.Tech in
        <span className="font-semibold text-gray-200">
          {" "}
          Computer Science & Engineering
        </span>
        , focused on building
        <span className="font-semibold text-gray-200">
          {" "}
          scalable web apps
        </span>{" "}
        using modern
        <span className="font-semibold text-gray-200">
          {" "}
          web technologies
        </span>{" "}
        and
        <span className="font-semibold text-gray-200"> DevOps practices</span>.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        I’m quick to <span className="font-semibold text-gray-200">adapt</span>,
        observe systems closely, and thrive in solving{" "}
        <span className="font-semibold text-gray-200">real-world problems</span>{" "}
        with solid
        <span className="font-semibold text-gray-200"> DSA skills </span> and
        clean architecture.
      </p>

      <div className="mt-10 space-y-6">
        <FadeInSection>
          <Card className="bg-zinc-900">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-orange-500">
                🎓 Education
              </h2>
              <p className="mt-2 text-muted-foreground">
                B.Tech in CSE @Lovely Professional University (2022–2026)
              </p>
            </div>
          </Card>
        </FadeInSection>

        <FadeInSection>
          <Card className="bg-zinc-900">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-orange-500">
                📞 Contact
              </h2>
              <p className="mt-2 text-muted-foreground">
                Email:{" "}
                <a href="mailto:aarushkumar8585@gmail.com" className="underline">
                  aarushkumar8585@gmail.com
                </a>
                <br />
                Phone:{" "}
                <a href="tel:+917091110011" className="underline">
                  +91 7091110011
                </a>
              </p>
            </div>
          </Card>
        </FadeInSection>
      </div>
    </main>
  );
}

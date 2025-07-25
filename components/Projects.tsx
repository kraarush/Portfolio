import FadeInSection from "./FadeInSection";
import { SectionHeader } from "./ui/SectionHeader";
import ProjectCard from "./ui/projectCard";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col min-h-screen max-w-5xl px-6 pt-[100px] mx-auto snap-start justify-center items-start">
      <FadeInSection>
        <SectionHeader title="Projects" />
      </FadeInSection>

      <div className="flex w-full gap-6 flex-col mb-10">
        <ProjectCard
          link="https://exprensio.netlify.app/"
          github="https://github.com/kraarush/Expense-Tracker"
          name="Expensio"
          learning="Cookies, JWT tokens, ChartJS"
          desc="A full-stack expense tracker application built with React, Node.js, Express.js, and MongoDB. This project allows users to record, manage, and visualize their expenses through an intuitive and responsive interface."
          techStack={[
            "tailwindcss.svg",
            "reactjs.svg",
            "mongo.svg",
            "redux.svg",
            "chartjs.svg",
          ]}
        />

        <ProjectCard
          link="https://redux-tailwind-playground.netlify.app/"
          github="https://github.com/kraarush/Redux-Tailwind-playground"
          name="React-tailwind Playground"
          learning="Tailwind, React and Responsive design"
          desc="This is a practice project for learning responsive designs using Tailwind CSS and state management using Redux Toolkit. The project aims to build a solid foundation for handling future complex frontend projects."
          techStack={[
            "nodejs.svg",
            "reactjs.svg",
            "tailwindcss.svg",
          ]}
        />

        <ProjectCard
          link="https://booklytic-1kzx.onrender.com/"
          github="https://github.com/kraarush/Booklytic"
          name="Booklytic"
          learning="Api integration, OAuth & otp based password reset"
          desc="Booklytic is a full-stack web application built for book enthusiasts, enabling users to review books and explore community-driven opinions before making a purchase. The platform integrates secure authentication, API-powered data fetching, and a seamless user experience"
          techStack={[
            "ejs.svg",
            "postgresql.svg",
            "bootstrap.svg",
            "nodejs.svg",
          ]}
        />

        <div className="text-2xl text-white font-medium">In development..</div>
        <ProjectCard
          link="https://opportunee.netlify.app/"
          github="https://github.com/kraarush/OpportuneX"
          name="Opportunex"
          learning="Docker, CI/CD, JWT and Jenkins"
          desc="A full-stack MERN web application that connects users with curated opportunities like internships, scholarships, and events. Built using React, Node.js, Express, and MongoDB, with Dockerized deployment and CI/CD via Jenkins for streamlined development and delivery."
          techStack={[
            "tailwindcss.svg",
            "reactjs.svg",
            "docker.svg",
            "mongo.svg",
            "redux.svg",
            "jenkins.svg",
          ]}
        />
      </div>
    </div>
  );
}

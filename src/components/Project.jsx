import ProjectCard from "./ProjectCard"; 

// Project Data
const projectData = [
  {
    title: "Next Ventures",
    description:
      "Developed a platform for virtual pitch competitions using Next.js 15, enabling smooth idea sharing and exploration with optimal performance.",
    image: "/icons/project1.png", // Replace with actual project image
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    sourceCode: "https://github.com/your-repo",
    website: "https://yourwebsite.com",
  },
  {
    title: "AI-Powered App",
    description:
      "Built an AI-powered application to automate tasks and enhance productivity using machine learning algorithms.",
    image: "/icons/project2.png", // Replace with actual project image
    techStack: ["Node.js", "Express", "MongoDB", "TensorFlow"],
    sourceCode: "https://github.com/your-repo",
    website: "https://yourwebsite.com",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Created a fully functional e-commerce platform with product management, cart, and payment integration.",
    image: "/icons/project3.png", // Replace with actual project image
    techStack: ["React", "Redux", "Node.js", "Stripe"],
    sourceCode: "https://github.com/your-repo",
    website: "https://yourwebsite.com",
  },
];

const Project = () => {
  return (
    <div className="min-h-screen w-full relative bg-gradient-to-r from-white via-sky-300 to-white flex items-center justify-center text-center flex-col gap-10 p-60">
      <h1 className="text-4xl font-semibold">Projects</h1>

      {/* Dynamic Project Cards */}
      <div className="flex flex-col gap-6">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;

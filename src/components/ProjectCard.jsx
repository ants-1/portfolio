function ProjectCard({
  title,
  description,
  image,
  techStack,
  sourceCode,
  website,
}) {
  return (
    <div className="bg-black/60 backdrop-blur-md text-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      {/* Image Container */}
      <div className="relative overflow-hidden border border-gray-800">
        <div className="absolute opacity-60 "></div>
        <img src={image} alt={title} className="w-full" />
      </div>

      {/* Content */}
      <div className="mt-5">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          {title}
        </h2>
        <p className="text-gray-400 mt-2">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-1/2 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition text-sm"
          >
            Source Code
          </a>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-1/2 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition text-sm"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

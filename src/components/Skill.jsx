const SkillsList = [
    { name: "JavaScript", iconSrc: "icons/js.png"},
    { name: "Node.js", iconSrc: "icons/node-js.png"},
    { name: "Express", iconSrc: "icons/express.png"},
    { name: "TypeScript", iconSrc: "icons/typescript.png"},
    { name: "React", iconSrc: "icons/react.svg"},
    { name: "Bootstrap", iconSrc: "icons/bootstrap.png"},
    { name: "CSS", iconSrc: "icons/css.png"},
    { name: "HTML", iconSrc: "icons/html.png"},
    { name: "TailwindCSS", iconSrc: "icons/tailwindcss.png"},
    { name: "MongoDB", iconSrc: "icons/mongodb.png"},
    { name: "MySQL", iconSrc: "icons/mysql.png"},
]

function Skill() {
    return (
      <div className="min-h-screen w-full relative bg-gradient-to-r from-white via-sky-300 to-white flex items-center justify-center text-center flex-col gap-10 ">
        <h1 className="text-4xl font-semibold">Skills</h1>
        <p className="max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus lectus ac nulla faucibus tincidunt sed ac odio. Suspendisse egestas cursus congue.
        </p>
        
        {/* Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {SkillsList.map((icon) => (
            <div key={icon.name} className="flex flex-col items-center bg-black/60 text-white rounded-lg p-3 backdrop-blur-md shadow-lg">
              <img
                src={icon.iconSrc}
                alt={icon.name}
                className="w-12 h-12"
              />
              <span className="text-sm mt-2">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Skill;
  

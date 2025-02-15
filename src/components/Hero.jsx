import TypingAnimation from "./TypingAnimation";

const iconsList = [
  { name: "GitHub Icon", location: "icons/github.png", link: "" },
  { name: "LinkedIn Icon", location: "icons/linkedin.png", link: "" },
];

function Hero() {
  return (
    <div className="min-h-screen w-full relative bg-gradient-to-r from-white via-sky-300 to-white flex items-center justify-center text-center flex-col gap-10 p-52">
      <h1 className="text-6xl font-semibold">Hi, I&apos;m Anthony</h1>
      <TypingAnimation />
      <div className="flex gap-5">
        {iconsList.map((icon) => (
          <img
            key={icon.name}
            src={icon.location}
            alt={icon.name}
            className="w-8 h-8 cursor-pointer"
          />
        ))}
      </div>
      <div className="absolute bottom-10 w-12 h-12 flex items-center justify-center bg-black/60 text-white rounded-full cursor-pointer hover:bg-gray-100/60 hover:text-black backdrop-blur-md shadow-lg transition-all">
        ▼
      </div>
    </div>
  );
}

export default Hero;

import { TypeAnimation } from "react-type-animation";

function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "I am a Full-Stack Developer",
        1000,
        "I am a Front-End Developer",
        1000,
        "I am a University Student",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-4xl"
      repeat={Infinity}
    />
  );
}

export default TypingAnimation;
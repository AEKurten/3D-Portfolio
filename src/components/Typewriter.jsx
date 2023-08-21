import { useTypewriter, Cursor } from "react-simple-typewriter";
import { styles } from "../style";

const TypewriterComponent = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "UX/UI Designer",
      "React Developer",
      "React Native Developer",
    ],
    loop: 0,
  });
  return (
    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
      I'm a <span className="text-[#915eff]">{text}</span> <Cursor />
    </p>
  );
};

export default TypewriterComponent;

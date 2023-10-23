// import emailjs from "@emailjs/browser"; activate this for email service
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import { RxMobile, RxEnvelopeClosed } from "react-icons/rx";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (chanegEvent) => {};
  const handleSubmit = (submitEvent) => {};

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className={`font-light ${styles.sectionSubText}`}>Cell</p>
            <a
              href="tel:+27823372457"
              className="flex items-center gap-2 hover:text-blue-600 transition-all duration-300 font-semibold text-xl mt-2"
            >
              <RxMobile size={24} />
              +27 82 337 2457
            </a>
          </div>
          <div>
            <p className={`font-light ${styles.sectionSubText}`}>Email</p>
            <a
              href="mailto:aekurten@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600 transition-all duration-300 font-semibold text-xl mt-2"
            >
              <RxEnvelopeClosed size={24} />
              aekurten@gmail.com
            </a>
          </div>
          <div>
            <p className={`font-light ${styles.sectionSubText}`}>Whatsapp</p>
            <a
              href="whatsapp://send?phone=+27823372457&text=Hi Aubrey,"
              className="flex items-center gap-2 hover:text-blue-600 transition-all duration-300 font-semibold text-xl mt-2"
            >
              <AiOutlineWhatsApp size={24} />
              Let's Chat
            </a>
          </div>
          <div>
            <p className={`font-light ${styles.sectionSubText}`}>Socials</p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100008234941918"
                target="_blank"
                className="hover:text-blue-600 transition-all duration-300"
              >
                <AiOutlineFacebook size={32} />
              </a>
              <a
                href="https://www.instagram.com/_aubrey_kurten_/"
                target="_blank"
                className="hover:text-blue-600 transition-all duration-300"
              >
                <AiOutlineInstagram size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/aubrey-kurten-8a97b11b9/"
                target="_blank"
                className="hover:text-blue-600 transition-all duration-300"
              >
                <AiOutlineLinkedin size={32} />
              </a>
              <a
                href="https://github.com/AEKurten"
                target="_blank"
                className="hover:text-blue-600 transition-all duration-300"
              >
                <AiOutlineGithub size={32} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

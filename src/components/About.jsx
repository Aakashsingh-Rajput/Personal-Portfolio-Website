import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const skillsLanguages = ["Java", "Python", "SQL", "HTML", "CSS", "JavaScript"];
const skillsTools = [
  "React.js",
  "Node.js",
  "Express.js",
  "Django",
  "MongoDB",
  "Firebase",
  "REST APIs",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "VS Code",
  "Vercel",
  "Canva",
];

// Updated SkillBadge with a simple and professional styles
const SkillBadge = ({ skill }) => (
  <span
    className="inline-block bg-gray-800 text-white text-base font-medium px-4 py-1 rounded-md mr-3 mb-3
               hover:bg-gray-700 transition-colors duration-300 select-none"
    title={skill}
  >
    {skill}
  </span>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mb-2`}>
          Let me introduce myself
        </p>
        <h2 className={`${styles.sectionHeadText} text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600`}>
          About Me
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-[18px] max-w-3xl leading-[32px] border-l-4 border-purple-500 pl-4"
      >
        I’m a <b className="text-white">21-year-old Computer Science Engineering student</b> specializing in Full Stack Development. Skilled in Java, Python, SQL, MongoDB, and modern web technologies like React.js, Node.js, Express.js, and Django.
        <br />
        Familiar with Tailwind CSS, Bootstrap, Responsive Web Design, REST APIs, and Firebase.
        <br />
        I use Git, GitHub, VS Code, Vercel, Canva, and Figma to boost my workflow. Passionate about solving problems and collaborating on impactful projects.
      </motion.p>

      <motion.div variants={textVariant()} className="mt-10">
        <h2 className={`${styles.sectionHeadText} text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600`}>
          Skills
        </h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.2, 1)} className="mt-6 max-w-3xl">
        <p className="text-secondary font-semibold mb-2">🛠️ Languages:</p>
        <div>
          {skillsLanguages.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>

        <p className="text-secondary font-semibold mt-6 mb-2">⚙️ Technologies & Tools:</p>
        <div>
          {skillsTools.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");

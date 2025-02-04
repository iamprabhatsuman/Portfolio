import styles from "./SkillStyles.module.css";
import checkMarkLight from "../../assets/checkmark-light.svg";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import SkillList from "./SkillsList";
import { useContext } from "react";
import { ThemeContext } from "../../Store/ThemeContext";

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  const checkMark = theme === "light" ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="section-title">Skills</h1>
      <div className={styles.skillList}>
        <SkillList icon={checkMark} skillName="HTML" />
        <SkillList icon={checkMark} skillName="CSS" />
        <SkillList icon={checkMark} skillName="JavaScript" />
        <SkillList icon={checkMark} skillName="TypeScript" />
        <SkillList icon={checkMark} skillName="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={checkMark} skillName="React" />
        <SkillList icon={checkMark} skillName="Angular" />
        <SkillList icon={checkMark} skillName="Vue" />
        <SkillList icon={checkMark} skillName="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={checkMark} skillName="Redux" />
        <SkillList icon={checkMark} skillName="Webpack" />
        <SkillList icon={checkMark} skillName="Git" />
        <SkillList icon={checkMark} skillName="Jest" />
        <SkillList icon={checkMark} skillName="Bootstrap" />
      </div>
    </section>
  );
};

export default Skills;

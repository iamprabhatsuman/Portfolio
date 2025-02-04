import styles from "./HeroStyle.module.css";
import HeroImage from "../../assets/Avatar1.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import xLightIcon from "../../assets/twitter-light.svg";
import xDarkIcon from "../../assets/twitter-dark.svg";
import gitHubLightIcon from "../../assets/github-light.svg";
import gitHubDarkIcon from "../../assets/github-dark.svg";
import linkedinLightIcon from "../../assets/linkedin-light.svg";
import linkedinDarkIcon from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useContext } from "react";
import { ThemeContext } from "../../Store/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeIcon = theme === "light" ? sun : moon;
  const xIcon = theme === "light" ? xLightIcon : xDarkIcon;
  const gitHubIcon = theme === "light" ? gitHubLightIcon : gitHubDarkIcon;
  const linkedinIcon = theme === "light" ? linkedinLightIcon : linkedinDarkIcon;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.heroImg}
          src={HeroImage}
          alt="Profile picture of Prabhat Suman"
        />
        <img
          src={themeIcon}
          className={styles.colorMode}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>
          Prabhat
          <br />
          Suman
        </h1>
        <h2>Full-Stack Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={xIcon} alt="Twitter Icon" />
          </a>

          <a href="https://github.com/" target="_blank">
            <img src={gitHubIcon} alt="GitHub Icon" />
          </a>

          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing dynamic, responsive, and efficient web
          applications from front-end to back-end.
        </p>
        <a href={CV} target="_blank" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;

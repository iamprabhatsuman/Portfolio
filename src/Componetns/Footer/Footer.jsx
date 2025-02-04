import styles from "./FooterStyles.module.css";

const Footer = () => {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Prabhat Suman. <br /> All rights reserved.
      </p>
    </section>
  );
};

export default Footer;

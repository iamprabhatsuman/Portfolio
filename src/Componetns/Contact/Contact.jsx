import styles from "./ContactStyles.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="section-title">Contact</h1>
      <form action="./action.php">
        <div className={styles.formGroup}>
          <label htmlFor="name" hidden>
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" hidden>
            E-mail:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="name" hidden>
            Name
          </label>
          <textarea
            name="textarea"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input type="submit" className="hover btn" value="Submit" />
      </form>
    </section>
  );
};

export default Contact;

import styles from "./ContactStyles.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="section-title">Contact</h1>
      <form action="https://api.web3forms.com/submit" method="POST">
        <div className={styles.formGroup}>
          <input
            type="hidden"
            name="access_key"
            value="6650f11e-d18a-45a1-a796-a40f28f50334"
          ></input>
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
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
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

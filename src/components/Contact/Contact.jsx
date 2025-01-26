import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <div className={styles.contact}>
      <p className={styles.name}>
        <span role="img" aria-label="User">
          👤
        </span>{" "}
        {name}
      </p>
      <p className={styles.number}>
        <span role="img" aria-label="Phone">
          📞
        </span>{" "}
        {number}
      </p>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

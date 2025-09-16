import styles from "./LoginForm.module.scss";
import { LoginForm } from "../LoginForm/LoginForm";

export const LoginModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <LoginForm />
        <button className={styles.closeBtn} onClick={onClose}>Luk</button>
      </div>
    </div>
  );
};

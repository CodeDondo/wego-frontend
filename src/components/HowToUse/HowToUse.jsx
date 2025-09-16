import styles from "./HowToUse.module.scss"

export const HowToUse = ({ isVisible, onClose, isMobile }) => {
  if (isMobile) {
    return (
      <section className={styles.howToUse}>
        <h1>Sådan virker det</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          aliquam leo libero, vitae ullamcorper nunc rutrum sit amet...
        </p>
      </section>
    )
  }

  if (!isVisible) return null

  return (
    <div className={styles.overlay}>
      <section className={styles.modal}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h1>Sådan virker det</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          aliquam leo libero, vitae ullamcorper nunc rutrum sit amet...
        </p>
      </section>
    </div>
  )
}

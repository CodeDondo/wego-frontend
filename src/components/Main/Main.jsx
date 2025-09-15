import Hero from "../../assets/cars-and-trees.svg"
import Footer from "../../assets/Footer.png"
import styles from "./Main.module.scss"

export const Main = () => {
  return (
    <main className={styles.main}>
        <img className={styles.image} src={Hero} alt="Hero" />
        <img className={`${styles.image} ${styles.imageFooter}`} src={Footer} alt="Footer" />
    </main>
  )
}

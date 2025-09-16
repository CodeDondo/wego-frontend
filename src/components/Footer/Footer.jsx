import FooterLogo from "../../assets/Footer.png"
import styles from "./Footer.module.scss"

export const Footer = () => {
  return (
    <footer>
        <img className={styles.FooterImg} src={FooterLogo} alt="Footer" />
    </footer>
  )
}

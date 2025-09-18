import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { NavBar } from '../components/NavBar/NavBar'
import styles from "./MainLayout.module.scss"

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

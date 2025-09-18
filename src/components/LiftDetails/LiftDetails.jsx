import { useLiftDetails } from '../../hooks/useLiftDetails'
import { Link } from "react-router-dom"
import Back from "../../assets/BAACK.png"
import styles from "./LiftDetails.module.scss"

export const LiftDetails = () => {
    const { liftDetails, loading, error } = useLiftDetails()

    if (loading) return <div>loading...</div>
    if (error) return <div>{error}</div>

    const { id, cityDeparture, cityDestination, comment, departureDate, user, createdAt } = liftDetails

    return (
        <section key={id} className={styles.section}>
            <div className={styles.backButton}>
                <Link to="/lift"><img src={Back} alt="Back-button" /></Link>
            </div>

            <div className={styles.header}>
                <h2>{cityDeparture} til {cityDestination}</h2>
                <p>{departureDate}</p>
            </div>

            <div className={styles.comment}>
                <h3>Chaufførens kommentar</h3>
                <p>{comment}</p>
            </div>

            <div className={styles.driver}>
                <h2>Chaufføren:</h2>
                <div className={styles.driverCard}>
                    <figure>
                        <img src={user.imageUrl} alt="billede" />
                    </figure>
                    <div className={styles.info}>
                        <p>{user.firstname} {user.lastname}</p>
                        <span className={styles.stars}>⭐ ⭐ ⭐</span>
                        <p>Medlem siden: {createdAt}</p>
                        <button>Skriv en anmeldelse</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

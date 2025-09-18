import { Link } from 'react-router-dom'
import { useLiftList } from '../../hooks/useLiftList'
import styles from './liftList.module.scss'

export const LiftList = () => {
  const { LiftList, loading, error } = useLiftList()

  if (loading) return <div>loading...</div>
  if (error) return <div>{error}</div>

  return (
    <ul className={styles.list}>
      {LiftList.slice(0,4).map(item => {
        const { id, cityDeparture, cityDestination, departureDate, addressDeparture, addressDestination, pricePerSeat, user } = item
        return (
          <Link to={`/lift/${id}`} key={id} className={styles.link}>
            <li className={styles.item}>
              <figure className={styles.avatar}>
                <img src={user.imageUrl} alt={`${user.firstname} ${user.lastname}`} />
              </figure>
              <div className={styles.userInfo}>
                <p className={styles.name}>{user.firstname} {user.lastname}</p>
                <div className={styles.rating}>
                  <span>⭐ ⭐ ⭐</span>
                </div>
              </div>
              <div className={styles.route}>
                <p className={styles.date}>{departureDate}</p>
                <h3>Fra: {cityDeparture}</h3>
                <p>{addressDeparture}</p>
                <h3>Til: {cityDestination}</h3>
                <p>{addressDestination}</p>
              </div>
              <div className={styles.price}>
                <p>DKK {pricePerSeat}</p>
              </div>
            </li>
          </Link>
        )
      })}
    </ul>
  )
}

import { useLiftDetails } from '../../hooks/useLiftDetails'
import { Link } from "react-router-dom"

export const LiftDetails = () => {
  const { liftDetails, loading, error } = useLiftDetails()

  if (loading) return <div>loading...</div>
  if (error) return <div>{error}</div>
  if (!liftDetails) return <div>Ingen detaljer fundet</div>

  const { id, cityDeparture, cityDestination, comment } = liftDetails

  return (
    <div key={id}>
      <Link to="/lift">◀️</Link>
      <h2>{cityDeparture} til {cityDestination}</h2>
      <h3>Chaufførens kommentar</h3>
      <p>{comment}</p>
    </div>
  )
}

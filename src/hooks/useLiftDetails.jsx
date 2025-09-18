import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const useLiftDetails = () => {
  const { lift_id } = useParams()
  const [liftDetails, setLiftDetails] = useState([]) 
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getLiftDetails = async () => {
      const URL = `${import.meta.env.VITE_API_URL}/trips/${lift_id}`

      try {
        const response = await fetch(URL, {
          method: "GET",
          headers: { Accept: "application/json" }
        })
        if (!response.ok) throw new Error("Kunne ikke hente lift detaljer")

        const result = await response.json()
        setLiftDetails(result) 
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (lift_id) getLiftDetails()
  }, [lift_id])

  return { liftDetails, loading, error }
}

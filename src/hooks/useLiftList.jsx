import { useEffect, useState } from "react"

export const useLiftList = () => {
  const [LiftList, setLiftList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect (() => {
    const getLiftList = async () => {
      const URL = `${import.meta.env.VITE_API_URL}/trips`

      try {
        const response = await fetch(URL, {
          method: "GET",
          headers: {Accept: "application/json"}
        })
        const result = await response.json()
        setLiftList(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getLiftList()
  }, [] )

  return {
    LiftList, loading, error 
  }
}

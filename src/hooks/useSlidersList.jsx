import { useEffect, useState } from "react"

export const useSlidersList = () => {
  const [SlidersList, setSlidersList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect (() => {
    const getSlidersList = async () => {
      const URL = `${import.meta.env.VITE_API_URL}/slides`

      try {
        const response = await fetch(URL, {
          method: "GET",
          headers: {Accept: "application/json"}
        })
        const result = await response.json()
        setSlidersList(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getSlidersList()
  }, [] )

  return {
    SlidersList, loading, error 
  }
}

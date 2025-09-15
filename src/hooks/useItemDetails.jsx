import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const useItemDetails = () => {
  const {slug} = useParams()
  const [itemDetails, setItemDetails] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect (() => {
    const getItemDetails = async () => {
      const URL = `${import.meta.env.VITE_API_URL}/products/${slug}`

      try {
        const response = await fetch(URL, {
          method: "GET",
          headers: {Accept: "application/json"}
        })
        const result = await response.json()
        setItemDetails(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getItemDetails()
  }, [] )

  return {
    itemDetails, loading, error 
  }
}

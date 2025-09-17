import { useEffect, useState } from "react"

export const useContentList = () => {
  const [ContentList, setContentList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect (() => {
    const getContentList = async () => {
      const URL = `${import.meta.env.VITE_API_URL}/content`

      try {
        const response = await fetch(URL, {
          method: "GET",
          headers: {Accept: "application/json"}
        })
        const result = await response.json()
        setContentList(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getContentList()
  }, [] )

  return {
    ContentList, loading, error 
  }
}

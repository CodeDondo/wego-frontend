import { useEffect, useState } from "react"

export const useItemList = () => {
  const [itemList, setItemList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect (() => {
    const getItemList = async () => {
      const URL = `${import.meta.env.VITE_API_URL}/products`

      try {
        const response = await fetch(URL, {
          method: "GET",
          headers: {Accept: "application/json"}
        })
        const result = await response.json()
        setItemList(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getItemList()
  }, [] )

  return {
    itemList, loading, error 
  }
}

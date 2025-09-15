import { useMemo, useState } from 'react'
import { useItemList } from '../../hooks/useItemList'
import { Link } from 'react-router-dom'

export const ItemListSort = () => {
    const { itemList, loading, error } = useItemList()
    const [sortKey, setSortKey] = useState("favo")


    const sorted = useMemo(() => {
        const arr = Array.isArray(itemList) ? [...itemList] : []
        return arr.sort((a, b) => {
            const aFavo = Number(a.numFavorites)
            const bFavo = Number(b.numFavorites)
            const aPrice = Number(a.price)
            const bPrice = Number(b.price)
            switch (sortKey) {
                case "favo":
                default:
                    return bFavo - aFavo
                    break
                case "priceAsc":
                    return aPrice - bPrice
                    break
                case "priceDesc":
                    return bPrice - aPrice
                    break
                case "alpha":
                    return String(a.title ?? "").localeCompare(String(b.title ?? ""))
                    break
            }
        })
    })

    if (loading) return <div>loading...</div>
    if (error) return <div>{error}</div>

    return (
        <>
            <div>
                <label htmlFor="sort">Sortere</label>
                <select 
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value)}>
                    <option value="favo">Mest populære</option>
                    <option value="priceAsc">Pris-stigende</option>
                    <option value="priceDesc">Pris-faldende</option>
                    <option value="alpha">Alfabetisk</option>
                </select>
            </div>
            <ul>
                {sorted.map(item => {
                    const { id, title, imageUrl, price, slug, numFavorites } = item
                    return (
                        <li key={id}>
                            <Link to={`${slug}`}>{title}</Link>
                            <img src={`${import.meta.env.VITE_IMAGE_URL}${imageUrl}`} alt="" />
                            <p>Pris:{price}</p>
                            <p>Antal favoritter:{numFavorites}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

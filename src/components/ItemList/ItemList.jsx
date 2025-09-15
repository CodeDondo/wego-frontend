import { useItemList } from '../../hooks/useItemList'
import { Link } from 'react-router-dom'

export const ItemList = () => {
    const { itemList, loading, error } = useItemList()

    if (loading) return <div>loading...</div>
    if (error) return <div>{error}</div>
    return (
        <ul>
            {itemList.map(item => {
                const { id, title, imageUrl, price, slug } = item
                return (
                    <li key={id}>
                        <Link to={`${slug}`}>{title}</Link>
                        
                    </li>
                )
            })}
        </ul>
    )
}

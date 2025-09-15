import { useItemDetails } from '../../hooks/useItemDetails'

export const ItemDetails = () => {
    const { itemDetails, loading, error } = useItemDetails()
    console.log(itemDetails);
    const { id, title, imageUrl, price, description } = itemDetails
    
    if (loading) return <div>loading...</div>
    if (error) return <div>{error}</div>
    return (
        <div key={id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price} DKK</p>
            <img src={`${import.meta.env.VITE_IMAGE_URL}${imageUrl}`} alt="" />
        </div>
    )
}

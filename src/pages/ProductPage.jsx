import { ContentWrapper } from "../components/ContentWrapper/ContentWrapper"
import { Outlet } from 'react-router-dom'

export const ProductPage = () => {
    return (
        <ContentWrapper
            title="Produkter"
            description="Se vores produkter"
            subtitle="">
                
            <Outlet />
        </ContentWrapper>
    )
}

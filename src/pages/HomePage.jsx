import { ContentWrapper } from "../components/ContentWrapper/ContentWrapper"
import { NavBar } from "../components/NavBar/NavBar"
import { Main } from "../components/Main/Main"

export const HomePage = () => {
    return (
        <ContentWrapper
            title="Velkommen til WeGo"
            description="Dette er en side hvor du finder dit lift videre!">
                
                <NavBar />
                <Main />
        </ContentWrapper>
    )
}

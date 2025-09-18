import { ContentWrapper } from "../components/ContentWrapper/ContentWrapper"
import { LiftDetails } from "../components/LiftDetails/LiftDetails"

export const LiftDetailPage = () => {
    return (
        <ContentWrapper
            title="Se detaljer her"
            description="Alt information til din chaffør er her">
                
            <LiftDetails />
        </ContentWrapper>
    )
}

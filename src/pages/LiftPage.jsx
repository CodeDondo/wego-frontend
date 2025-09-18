import { ContentWrapper } from "../components/ContentWrapper/ContentWrapper"
import { LiftList } from "../components/LiftList/LiftList"
import { Outlet } from "react-router-dom"

export const LiftPage = () => {
  return (
    <ContentWrapper
      title="Få dig et lift"
      description="Her kan du få et lift">
      <LiftList />
      <Outlet />
    </ContentWrapper>
  )
}

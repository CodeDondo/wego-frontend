import { Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { LiftPage } from "./pages/LiftPage"
import { MainLayout } from "./Layouts/MainLayout"
import { LiftList } from "./components/LiftList/LiftList"
import { LiftDetails } from "./components/LiftDetails/LiftDetails"
import "./reset.scss"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/lift" element={<LiftPage />}>
            <Route index element={<LiftList />} />
          </Route>
            <Route path="/lift/:lift_id" element={<LiftDetails />} />
        </Route>
      </Routes >
    </>
  )
}

export default App

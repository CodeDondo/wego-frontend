import { Routes, Route } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { HomePage } from "./pages/HomePage"
import { ProductPage } from "./pages/ProductPage"
import { LoginPage } from "./pages/LoginPage"
import { ItemListSort } from './components/ItemListSort/ItemListSort'
import { ItemDetails } from "./components/ItemDetails/ItemDetails"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductPage />}>
            <Route index element={<ItemListSort />}></Route>
            <Route path=":slug" element={<ItemDetails />}></Route>
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

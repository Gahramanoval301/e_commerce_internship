import { Route, Routes } from "react-router"
import Home from "../pages/home"
import ProductSlug from "../pages/ProductSlug"
import Cart from "../components/Cart"

const WebRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<ProductSlug />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}
export default WebRouting
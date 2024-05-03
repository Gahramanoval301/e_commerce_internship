import { Route, Routes } from "react-router"
import Home from "../pages/home"
import ProductSlug from "../components/ProductSlug"

const WebRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/:slug" element={<ProductSlug />} />
        </Routes>
    )
}
export default WebRouting
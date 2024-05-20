import { Route, Routes } from "react-router"
import Home from "../pages/home"
import ProductSlug from "../pages/ProductSlug"
// import Cart from "../components/Cart"

import { lazy, Suspense } from "react"
const Cart = lazy(() => import("../components/Cart"))

const WebRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<ProductSlug />} />
            <Route path="/cart" element={
                <Suspense fallback={<div>salam</div>}>
                    <Cart />
                </Suspense>
            } />
        </Routes>
    )
}
export default WebRouting
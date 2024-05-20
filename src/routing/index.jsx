import { Route, Routes } from "react-router"
import Home from "../pages/home"
import ProductSlug from "../pages/ProductSlug"
import Loading from "../components/Loading"
import { lazy, Suspense } from "react"

const Cart = lazy(() => import("../components/Cart"))
const Favourites = lazy(() => import("../components/Favourites"))

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
            <Route path="/favourites" element={
                <Suspense fallback={<Loading />}>
                    <Favourites />
                </Suspense>
            } />
        </Routes>
    )
}
export default WebRouting
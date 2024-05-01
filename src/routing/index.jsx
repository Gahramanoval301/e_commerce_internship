import { Route, Routes } from "react-router"
import Home from "../pages/home"

const WebRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}
export default WebRouting
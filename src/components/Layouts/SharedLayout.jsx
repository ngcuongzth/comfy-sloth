import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
const ShareLayout = () => {
    return (
        <main>
            <Navbar />
            <Sidebar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default ShareLayout
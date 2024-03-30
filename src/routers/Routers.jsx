import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from "../pages/Home"
import ProjectDetails from "../pages/ProjectDetails"

function Routers() {
    return (
        <>
            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<ProjectDetails />} />
                </Route>
            </Routes>
        </>
    )
}

export default Routers
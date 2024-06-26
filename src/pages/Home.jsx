import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import OtherProjects from "./components/OtherProjects"
import Projects from "./components/Projects"
import Services from "./components/Services"

function Home() {
    return (
        <>
            <Header />
            <About/>
            <Services/>
            <Projects/>
            <OtherProjects/>
            <Contact/>
        </>
    )
}

export default Home
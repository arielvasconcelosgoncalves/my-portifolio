import AboutSection from "./pages/Home/sections/About/About"
import HeroSection from "./pages/Home/sections/Hero/Hero"
import Navbar from "./components/NavBar/NavBar"
import ProjectsSection from "./pages/Home/sections/Projects/Projects"
import Footer from "./components/Footer/Footer"

const App: React.FC = () => {

  return (
    <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <Footer />     
    </>
  )
}

export default App

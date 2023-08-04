import About from "./components/About";
import Departments from "./components/Departments";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar/>
      <About/>
      <Facilities/>
      <Departments/>
      <Projects/>
      <Footer/>
      
    </>
  )
}

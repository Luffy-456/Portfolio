import { Navbar } from "@/layout/Navabar";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Proj} from "@/sections/Proj";
import {Exp} from "@/sections/Exp";
import {Contact} from "@/sections/Contact";
import { BackgroundMusic } from "./components/BackgroundMusic";
import {Footer} from  "@/layout/Footer";


function App() {


  return (
    <>
     <div className="min-h-screen overflow-x-hidden">
      <BackgroundMusic/>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Proj />
        <Exp />
        <Contact />
      </main>
      <Footer />
     </div>
    </>
  )
}

export default App

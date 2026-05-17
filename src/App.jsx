import { Navbar } from "@/layout/Navabar";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Proj} from "@/sections/Proj";
import {Exp} from "@/sections/Exp";
import {Contact} from "@/sections/Contact";


function App() {


  return (
    <>
     <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Proj />
        <Exp />
        <Contact />
      </main>
     </div>
    </>
  )
}

export default App

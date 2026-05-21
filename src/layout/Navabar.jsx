import {useState,useEffect} from "react";
import { Button } from "@/components/Button";
import { Menu,X } from "lucide-react";

const navLinks = [
    { href: "#About", label: "About" },
    { href: "#Proj", label: "Project" },
    { href: "#Exp", label: "Experience" },
    { href: "#Contact", label: "Contact" },
];

export const Navbar = () => {
    // isMM: isMoobileMenuOpen, setMM: setIsMoobileMenuOpen
    const [isMM, setMM] =useState(false);
    
    //isS: isScrolled, setS:setScrolled
    const[isS,setS]=useState(false);

    useEffect(()=>{
        const handleScroll=()=>{
            setS(window.scrollY>50);
        };


        window.addEventListener("scroll",handleScroll);

        return()=>window.removeEventListener("scroll",handleScroll);
    },[]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isS ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a
                    href="#"
                    className=" text-xl font-bold tracking-tight hover:text-primary transition-colors duration-300"
                >
                    LUFFY <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
                </a>

                {/* desktop */}
                <div className=" hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {/* render all nav items */}
                        {navLinks.map((link, idx) => (
                            <a href={link.href} key={idx} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                
                {/* contact me */}
                <div className="hidden md:block">
                    <a href="#Contact" onClick={()=>setMM(false)}>
                        <Button size="sm">
                            Contact ME
                        </Button>
                    </a>
                </div>

                {/* mobile menu button */}
                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={
                    ()=> setMM((prev)=>!prev)
                }>
                    {isMM ? <X size={24}/> :  <Menu size={24}/>}
                </button>

            </nav>

            {/* mobile menu   if isMM:true it will show*/}
            {isMM && (
                <div className="md:hidden glass-strong ani-fade-in">
                    <div className="container mx-auto p-6 flex flex-col gap-4">
                        {/* render all nav items */}
                        {navLinks.map((link, idx) => (
                            <a href={link.href} key={idx} className="text-lg text-muted-foreground hover:text-foreground py-2" onClick={()=>setMM(false)}>
                            {link.label}
                        </a>
                        ))}

                        {/* <Button asChild onClick={()=>setMM(false)}>
                        Contact ME
                        </Button> */}
                    </div>
                </div>
            )}
        </header>
    );
};

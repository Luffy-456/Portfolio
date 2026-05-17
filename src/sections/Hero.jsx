import {Button} from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";


export const Hero=() =>{
    return <section className="relative min-h-screen flex items-center overflow-hidden ">
        {/* bg */}
        <div className="absolute inset-0">
            <img src="/hero-bg.png" alt="hero bg img" className="w-full h-full object-cover opacity-60"/>

            <div className="absolute inset-0 bg-gradient-to-r from-background/20
            via-background/80 to-background" />
        </div>

        {/* hehe something interesting that i kanged called Green Dots*/}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(40)].map((_,i) =>(
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-70" style={{
                    backgroundColor: "#20B2A6",
                    left:`${Math.random() *100}%`,
                    top:`${Math.random() *100}%`,
                    animation:`dot-ani ${15+Math.random()*20}s ease-in-out infinite`,
                    animationDelay:`${Math.random()*2}s`
                }}/>
            ))}

        </div>


        {/* content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* left */}
                <div className="space-y-8">
                    <div className="ani-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            MUHEHE IDK YET • DEKHTEY Hn !
                        </span>
                    </div>

                {/* headline */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight ani-fade-in ani-delay-100">
                        Hmm... 
                        <span className="text-primary glow-text">Lets!
                        </span><br/>
                        <span className="font-serif font-normal italic text-white">Build Something....</span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-lg ani-fade-in ani-delay-200">
                        Hi, I'm Luffy — a android enthusiast specializing in
                        Debuggin , driking koffeee! . I build scalable, web
                        applications that users love & roms as well.
                    </p>

                    {/* call to action buttons */}
                    <div className="flex flex-wrap gap-4 ani-fade-in ani-delay-300">
                        <Button size="lg"       className="">
                            Contact ME <ArrowRight className="w-5 h-5"/>
                        </Button>
                        <AnimatedBorderButton />
                    </div>
                </div>

{/* need to fix social */}
                    {/* socials */}
                    {/* <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: computer, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div> */}
                
                    
                </div>
                {/* right */}
                <div className="relatice animate-fade-in animation-delay-300">
                <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/hero-profile.jpeg"
                  alt="Luffy"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

            </div>
        </div>
        </div>
        </div>
        </div>


    </section>;
}
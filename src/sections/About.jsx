import { Code2, Lightbulb, Rocket, Users } from "lucide-react";


const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Just write easy to understand code.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Grab a koffee & work with me.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Let's find some bugs & do some PR.",
  },
];
export const About=() =>{
    return <section id="About" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* left side */}
                <div className="space-y-8">
                    <div className="ani-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                            About ME
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight ani-fade-in ani-delay-100 text-secondary-foreground">
                        Trying to keep up,
                        <span className="font-serif italic font-normal text-white"> with one component at a time.</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground ani-fade-in ani-delay-200">
                        <p>Emerging AI/ML developer & open-source enthusiast with experience in Python, C/C++, web development, and GitHub as well as strong problem solving skills & a firm hold over DSA.</p>
                        <p>Built a Take-Two Interactive Stock Analytics & Prediction System & machine learning is the newest rabbit hole I've fallen into. </p>
                        <p>This marks my first step into open source where I aim to grow beyond academics, contribute meaningful solutions, collaborate with developers and improve through real-world development experience.</p>
                    </div>

                    <div className="glass-strong rounded-2xl p-6 glow-border ani-border ani-fade-in ani-delay-200 inline-block">
                        <p className="text-lg font-medium italic text-foreground font-mono">“One mission: Become better than yesterday.”</p>
                    </div>
                </div>

                {/* right side */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item,idx)=>(
                        <div key={idx} className="glass p-6 rounded-2xl ani-fade-in transition-all duration-300 hover:-translate-y-2 hover: hover:scale-[1.05] ease-linear"
                        style={{animationDelay:`${(idx +1)*100}ms`}}>
                            {/* render icon */}
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 ">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            {/* render title */}
                            <h3 className="font-mono text-xl">
                                {item.title}
                            </h3>
                            {/* render description */}
                            <p className=" text-sm text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>;
}
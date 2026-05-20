import TTWO from "@/assets/placeholder_ttwo.jpg";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects=[
    {
        title:"TTWO Stock Analytics and Prediction",
        description:"Stock market prediction is a critical domain in finance using ML",
        image:TTWO,
        tags:["Python","Pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn"],
        link:"#",
        github:"https://github.com/Luffy-456/TTWO-Stock-Analysis-and-Prediction"
    }
];
export const Proj=() =>{
    return <section id="Proj" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
        <div className="container mx-auto px-6 relative z-10">
            {/* proj section header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-md font-medium traching-wider uppercase font-mono ani-fade-in">Featured Work</span>
                <h2 className="text-4xl md:text-5xl font-bold font-mono mt-4 mb-6 ani-fade-in ani-delay-100 text-secondary-foreground">Projects made
                    <span className="font-serif italic font-normal text-white"> under Pressure!!</span>
                </h2>
                <p className="text-muted-foreground ani-fade-in ani-delay-200">
                    HALL OF PROJECTS
                </p>
            </div>
            
            {/* projects grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project,idx)=>(
                    <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay:`${(idx +1)*100}ms`}}>
                        {/* img */}
                        <div className="relative overflow-hidden aspect-video">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>

                        {/* links */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                            <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all " target="_blank">
                                <ArrowUpRight className="w-5 h-5"/>
                            </a>
                            <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all " target="_blank">
                                <FaGithub className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>

                    {/* content */}
                    <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                            <h3 href={project.github} target="_blank" className="text-xl font-semibold group-hover:text-primary transitions-color">Project Title</h3>
                            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                        </div>
                        <p className="text-mute-foreground text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag,tagidx)=>(
                                <span key={tagidx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/80 hover:text-primary transition-all duration-300">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>

    </section>;
}
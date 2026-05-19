import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import heroBg from "@/assets/hero-bg.png";
import heroProfile from "@/assets/hero-profile.jpeg";

const skills=[
    "React",
    "Tailwindcss",
    "HTML",
    "CSS",
    "C",
    "C++",
    "JAVA",
    "PYTHON",
    "MySQL",
    "DEBUGGING",
    "JAVA SCRIPT",
    "BOOTSTRAP",
    "GIT",
    "DOCKER",
    "AWS"
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
      {/* bg */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="hero bg img"
          className="w-full h-full object-cover opacity-60"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-background/20
            via-background/80 to-background"
        />
      </div>

      {/* hehe something interesting that i kanged called Green Dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-70"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `dot-ani ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
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
                <span className="text-primary glow-text">Lets!</span>
                <br />
                <span className="font-serif font-normal italic text-white">
                  Build Something....
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg ani-fade-in ani-delay-200">
                Hi, I'm Luffy — a android enthusiast specializing in Debuggin ,
                driking koffeee! . I build scalable, web applications that users
                love & roms as well.
              </p>

              {/* call to action buttons */}
              <div className="flex flex-wrap gap-4 ani-fade-in ani-delay-300">
                <Button size="lg" className="">
                  Contact ME <ArrowRight className="w-5 h-5" />
                </Button>
                <AnimatedBorderButton />
              </div>
            </div>

            {/* socials */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>

              {[
                { icon: FaGithub, href: "https://github.com/Luffy-456" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/devopse/" },
                { icon: FaTelegram, href: "https://t.me/luffy456_op" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300" target="_blank"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* right */}
          <div className="relatice animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={heroProfile}
                  alt="Luffy"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
              {/* floating badge on profile img */}
                    <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 ani-float">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-md font-mono">Available for Work!</span>
                        </div>
                    </div>


              {/* stats badge */}
                    <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 ani-float ani-delay-500">
                        <div className="text-md font-bold text-primary">Fresher</div>
                    </div>


              </div>



            </div>
          </div>
        </div>

        {/* SKILLS */}
              <div className="mt-20 ani-fade-in ani-delay-600">
                <p className="tex-sm text-muted-foreground mb-6 text-center">Technologies</p>
                <div className="realtive overflow-hidden">
                    <div className="flex ani-marquee">
                        {
                            [...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                {skill.name}
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                                </div>

                            ))}
                    </div>
                </div>
              </div>

      </div>
    </section>
  );
};

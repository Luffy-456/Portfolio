import { Button } from "@/components/Button";

const navLinks = [
    { href: "#About", label: "About" },
    { href: "#Proj", label: "Proj" },
    { href: "#Exp", label: "Exp" },
    // { href: "#Contact", label: "Contact" },
];

export const Navbar = () => {
    return (
        <header
            className="fixed top-0 left-0 right-0 bg-transparent py-5"
        >
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a
                    href="#"
                    className="text-xl font-bold tracking-tight hover:text-primary"
                >
                    AS<span className="text-primary">.</span>
                </a>

                {/* desktop */}
                <div className="flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {/* render all nav items */}
                        {navLinks.map((link, idx) => (
                            <a href={link.href} key={idx} className="px-4 py-2 text-sm text-muted-forground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                
                {/* contact me */}
                <div className="">
                    <Button size="sm">
                        Contact ME
                    </Button>
                </div>
            </nav>
        </header>
    );
};

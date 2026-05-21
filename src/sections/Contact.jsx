import { MapPin,Mail,Send, CheckCircle, AlertCircle } from "lucide-react";
import {Button} from "@/components/Button.jsx";
import { useState } from "react";
import emailjs from "@emailjs/browser";
const contactInfo=[
    {
        icon:Mail,
        label:"Email",
        value:"anshuman567.in@gmail.com",
        href:"mailto:anshuman567.in@gmail.com",
    },
    {
        icon:MapPin,
        label:"Location",
        value:"Uttar Pradesh, India",
        href:"#",
    },
];


export const Contact=() =>{
// submit logic
//f=formData, setF=setFormData
    const [f,setF] =useState({
        name:"",
        email:"",
        message:""
    });
    const[isLoading, setIsLoading] =useState(false);
    const [submitStatus, setSubmitStatus]=useState({
        type: null, // done or error
        message:"",
    });

    const handleSubmit =async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({type:null, message:""});
        try{
            const serviceID= import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID=import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey=import.meta.env.VITE_EMAILJS_PUBLIC_ID;
            if(!serviceID||!templateID||!publicKey){
                throw new Error("EmailJS configuration is missing")
            }

            await emailjs.send(serviceID,templateID,{
                name:f.name,
                email:f.email,
                message:f.message,
            },publicKey);

            setSubmitStatus(
                {
                    type:"success",
                    message:"Message sent , no issues!, I'll get back to you soon.",
                }
            );
            //reset everything
            setF({name:"",email:"",message:""});
        }
        catch(err){
            console.error("EmailJS error: ",err);
            setSubmitStatus(
                {
                    type:"error",
                    message: err.text|| "Failed to send message.",
                }
            );
        }
        finally{
            setIsLoading(false);
        }
    };

    return(
         <section id="Contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
           <div className="absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl -translate-y-1"/>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            {/* contact section header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-md font-medium traching-wider uppercase font-mono ani-fade-in">Get In Touch</span>
                <h2 className="text-4xl md:text-5xl font-bold font-mono mt-4 mb-6 ani-fade-in ani-delay-100 text-secondary-foreground">Let's build,{" "}
                    <span className="font-serif italic font-normal text-white">{" "}something Gr8...</span>
                </h2>
                <p className="text-muted-foreground ani-fade-in ani-delay-200">
                    Have a Project in mind? Let's talk about it with a cup koffee...
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="glass-strong p-8 rounded-3xl border border-primary/50  ani-fade-in ani-delay-300">
                    <form action="" className="space-y-6" onSubmit={handleSubmit}>

                        <div className="">
                            <label htmlFor="name" className="block text-sm font-medium mb-2 ">Name</label>
                            <input id="name" type="text" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required placeholder="Your Name..." value={f.name}
                            onChange={(e)=>
                                 setF(
                                        {...f, name:e.target.value}
                                    )}/>
                        </div>

                        <div className="">
                            <label htmlFor="email" className="block text-sm font-medium mb-2 ">Email</label>
                            <input id="email" type="text" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required placeholder="your_email@address.com" value={f.email}
                            onChange={(e)=>
                                 setF(
                                        {...f, email:e.target.value}
                                    )}/>
                        </div>

                        <div className="">
                            <label htmlFor="message" className="block text-sm font-medium mb-2 ">Message</label>
                            <textarea id="message" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" required placeholder="Your Message..." rows={5} value={f.message}
                            onChange={(e)=>
                                 setF(
                                        {...f, message:e.target.value}
                                    )}/>
                        </div>

                        <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                            {isLoading ?(
                                <>
                                    Sending...
                                </>) : (
                                <>
                                    Send Message |
                                    <Send className="pl-1"/>
                                </>)

                            }
                        </Button>
                        
                        {submitStatus.type && (
                            <div
                                className={`flex items-center gap-3 p-4 rounded-xl ${
                                    submitStatus.type === "success"
                                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                                }`}
                            >
                                {submitStatus.type === "success" ? (
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                )}

                                <p className="text-sm">{submitStatus.message}</p>
                            </div>
                        )}

                    </form>
                </div>

                {/* Contact Info Display */}
                <div className="space-y-6 ani-fade-in ani-delay-400">
                    <div className="glass rounded-3xl p-8">
                        <h3 className="text-xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-4">
                            {contactInfo.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>

                                    <div>
                                        <div className="text-sm text-muted-foreground">
                                            {item.label}
                                        </div>

                                        <div className="font-medium">
                                            {item.value}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Availabity Card */}
                    <div className="glass rounded-3xl p-8 border border-primary/30">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-medium">Currently Available</span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            I'm currently open to new opportunities and exciting projects.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
}

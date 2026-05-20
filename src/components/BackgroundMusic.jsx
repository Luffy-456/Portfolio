import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

import song from "@/assets/song.mp3"

export const BackgroundMusic =() =>
{
    const audioRef = useRef(null);
    //isP: isPlaying , setIP: setIsPlaying
    const [isP, setIP] = useState(false);

    useEffect(()=>{
        const playAudio = async () =>{
            try{
                if(audioRef.current){
                    audioRef.current.volume =0.1;
                    await audioRef.current.play();
                    setIP(true);
                }
            }
            catch(err){
                console.log("Audio Blocked");
            }
        };
        // will handle first interaction on screen
        const handleFirstInteraction =() =>
        {
            playAudio();
            window.removeEventListener("touchstart", handleFirstInteraction);
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("keydown", handleFirstInteraction);
        };
        window.addEventListener("touchstart", handleFirstInteraction);
        window.addEventListener("click", handleFirstInteraction);
        window.addEventListener("keydown", handleFirstInteraction);
        
        return()=>{
            window.removeEventListener("touchstart", handleFirstInteraction);
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("keydown", handleFirstInteraction);
        }

    },[]);

    const toggleMusic=()=>{
        if(!audioRef.current) return;
        if(isP){
            audioRef.current.pause();
        }
        else{
            audioRef.current.play();
        }
        setIP(!isP);
    };

    return (
        <>
            <audio ref={audioRef} loop>
                <source src={song} type="audio/mp3"/>
            </audio>
            <button onClick={toggleMusic} className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass hover:scale-110 transition-all">
                {isP ? (<Volume2 className="w-5 h-5"/>):(<VolumeX className="w-5 h-5"/>)}
            </button>
        
        </>
    );

};
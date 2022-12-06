import { useEffect, useRef, useState } from "react";
import "./Drum.scss";

export default function Drum (){

const audioClips = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

return (
  <>
    <section className="drum">
      <div className="drum__keys">
        {audioClips.map((clip) => (
          <Pad key={clip.id} clip={clip}/>
        ))}
      </div>
    </section>
  </>
);
}

function Pad ({clip}){
  const [active, setActive]=useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === clip.keyCode) {
        playSound();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      document.addEventListener("keydown", handleKeyPress);
    };
  }, [clip.keyCode]);



  const playSound = () => {
    // console.log("ref.current", ref.current);
    setActive(true);
    setTimeout(()=>setActive(false),200);
    const audioTag = ref.current;
    audioTag.currentTime = 0;
    audioTag.play();
  };

  return (
    <div onClick={(e) => playSound(e)} className={`drum__key ${active?"drum__sound drum__playing":""}`}>
      <audio ref={ref} src={clip.url} /> {clip.keyTrigger}
    </div>
  );
}


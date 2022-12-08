import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { audioClips } from "../../utils/utils";
import "./Drum.scss";

export default function Drum (){



return (
  <>
    <section className="drum">
      <div className="drum__keys">
        {audioClips.map((clip) => (
          <Pad key={uuidv4()} clip={clip} />
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


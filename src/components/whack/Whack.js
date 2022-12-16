import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ReactConfetti from "react-confetti";
import { audioClips } from "../../utils/utils";
import WhackAMole from "../../assets/images/whack-a-mole_logo.svg";
import "./Whack.scss";

const TIME = 30000;
const SCORE = 100;

export default function  Whack() {
  const [score, setScore] = useState(0);
  const [play, setPlay] = useState(false);
  const [finish, setFinish] = useState(false);
  const [moles, setMoles] = useState([]);
  const [isAudioMonsterPlaying, setIsAudioMonsterPlaying] = useState(false);
  const [isAudioCookiePlaying, setIsAudioCookiePlaying] = useState(false);
  const [isAudioSlimePlaying, setIsAudioSlimePlaying] = useState(false);

  const [windowDimension, setWindowDimension] = useState({
    width: 1200,
    height: 500,
  });

  const [showConfetti, setShowConfetti] = useState(false);
  const [isScoreGood, setIsScoreGood]= useState(false);

  const MONSTER_URL = "/monster.mp3";
  const COOKIE_URL = "/cookie.mp3";
  const SLIME_URL = "/slime.mp3";

  const audioMonster = useRef();
  const audioCookie = useRef();
  const audioSlime = useRef();

    const detectSize = () => {
      setWindowDimension({
        width:1200,
        height: 500,
      });
    };

    useEffect(() => {
      if (isScoreGood) {
        setShowConfetti(true);
        window.addEventListener("resize", detectSize);
        const timer = setTimeout(() => {
          setShowConfetti(false);
        }, 4000);

        return () => {
          window.removeEventListener("resize", detectSize);
          clearTimeout(timer);
        };
      }
    }, [finish]);

  const endGame = () => {
    setIsScoreGood(false);
    if(score >= 1000){
    setIsScoreGood(true);
  }
    setPlay(false);
    setFinish(true);
    setIsAudioMonsterPlaying(false);
    setIsAudioCookiePlaying(false);
    setIsAudioSlimePlaying(false);
  };

  const startGame = () => {
    setScore(0);
    setIsScoreGood(false);
    setPlay(true);
    setFinish(false);
    setMoles(makeMoles());
    setIsAudioMonsterPlaying(true);
  };

  useEffect(() => {
    if (isAudioMonsterPlaying) {
      audioMonster.current.play();
    } else {
      audioMonster.current.pause();
    }
  }, [isAudioMonsterPlaying]);

  const startElderlyGame = () => {
    setScore(0);
    setIsScoreGood(false);
    setPlay(true);
    setFinish(false);
    setMoles(makeElderlyMoles());
    setIsAudioCookiePlaying(true);
  };

  useEffect(() => {
    if (isAudioCookiePlaying) {
      audioCookie.current.play();
    } else {
      audioCookie.current.pause();
    }
  }, [isAudioCookiePlaying]);

  const startCrazyGame = () => {
    setScore(0);
    setIsScoreGood(false);
    setPlay(true);
    setFinish(false);
    setMoles(makeCrazyMoles());
    setIsAudioSlimePlaying(true);
  };

  useEffect(() => {
    if(isAudioSlimePlaying){
      audioSlime.current.play();
    }else{
      audioSlime.current.pause();
    }
  }, [isAudioSlimePlaying]);

  const makeMoles = () =>
    new Array(6).fill().map(() => ({
      speed: gsap.utils.random(0.5, 1),
      delay: gsap.utils.random(0.5, 4),
      points: SCORE,
    }));

  const makeElderlyMoles = () =>
    new Array(3).fill().map(() => ({
      speed: gsap.utils.random(0.5, 5),
      delay: gsap.utils.random(0.5, 4),
      points: SCORE,
    }));

  const makeCrazyMoles = () =>
    new Array(12).fill().map(() => ({
      speed: gsap.utils.random(0.5, 0.3),
      delay: gsap.utils.random(0.5, 4),
      points: SCORE,
    }));

  const onHit = (points) => setScore(score + points);


  return (
    <>
      <audio ref={audioMonster} src={MONSTER_URL} />
      <audio ref={audioCookie} src={COOKIE_URL} />
      <audio ref={audioSlime} src={SLIME_URL} />
      <div className="Whack__background">
        <div className="Whack__wrapper">
          {!play && !finish && (
            <>
              <img
                src={WhackAMole}
                alt="whack a mole logo"
                className="Whack__title"
              ></img>
              <div className="Whack__button-group">
                <button onClick={startGame} className="Whack__btn">
                  Play
                </button>
                <button onClick={startElderlyGame} className="Whack__btn">
                  Elderly Mode
                </button>
                <button onClick={startCrazyGame} className="Whack__btn">
                  Crazy Mode
                </button>
              </div>
            </>
          )}
          {play && (
            <div className="Whack__main">
              <button className="Whack__end-game Whack__btn" onClick={endGame}>
                End game
              </button>

              <div className="Whack__record">
                <Score value={score} />
                <Timer time={TIME} onEnd={endGame} />
              </div>

              <Moles>
                {moles.map(({ speed, delay, points }, index) => (
                  <Mole
                    key={index}
                    onHit={onHit}
                    points={points}
                    delay={delay}
                    speed={speed}
                  />
                ))}
              </Moles>
            </div>
          )}
          {finish && (
            <>
              <div className="Whack__record">
                <Score value={score} />
              </div>
              <div className="Whack__button-group">
                <button onClick={startGame} className="Whack__btn">
                  Play again
                </button>
                <button onClick={startElderlyGame} className="Whack__btn">
                  Elderly Mode
                </button>
                <button onClick={startCrazyGame} className="Whack__btn">
                  Crazy Mode
                </button>
              </div>
            </>
          )}

          {showConfetti&&
          <ReactConfetti
            width={windowDimension.width}
            height={windowDimension.height}
          />}

        </div>
      </div>
    </>
  );
}

function Moles({ children }) {
  return <div className="Whack__mole-wrapper">{children}</div>;
}

const Mole = ({ points, delay, speed, onHit }) => {
  const buttonRef = useRef(null);
  const bobRef = useRef(null);
  const pointsRef = useRef(points);
  const [hited, setHited] = useState(false);
  const audioRef = useRef();

  const hit = () => {
    setHited(true);
    onHit(pointsRef.current);
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  useEffect(() => {
    gsap.set(buttonRef.current, {
      yPercent: 100,
      display: "block",
    });
    bobRef.current = gsap.to(buttonRef.current, {
      yPercent: 35,
      duration: speed,
      yoyo: true,
      repeat: -1,
      // inorder to set yoyo ture(when yoyo is true the timeline goes back and forth), repeat can not be 0
      delay,
      repeatDelay: delay,
    });

    return () => {
      bobRef.current?.kill();
      //kill->stop animation
    };
  }, [delay, speed]);

  useEffect(() => {
    if (hited) {
      pointsRef.current = points;
      bobRef.current.pause();
      gsap.to(buttonRef.current, {
        yPercent: 100,
        duration: 0.1,
        onComplete: () => {
          gsap.delayedCall(gsap.utils.random(1, 3), () => {
            setHited(false);
            bobRef.current.restart();
          });
        },
      });
    }
  }, [hited, points]);

  return (
    <>
      <div className="Whack__mole-hole">
        <button className="Whack__mole" ref={buttonRef} onClick={hit}>
          <audio ref={audioRef} src={audioClips[4].url}></audio>
        </button>
      </div>
    </>
  );
};

const Score = ({ value }) => <div className="Whack__score">{`Score: ${value}`}</div>;

const Timer = ({ time, interval = 1000, onEnd }) => {
  const [internalTime, setInternalTime] = useState(time);
  const timerRef = useRef(time);
  const timeRef = useRef(time);

  useEffect(() => {
    if (internalTime === 0 && onEnd) onEnd();
  }, [internalTime, onEnd]);

  useEffect(() => {
    timerRef.current = setInterval(
      () => setInternalTime((timeRef.current = timeRef.current - interval)),
      interval
    );
    return () => clearTimeout(timerRef.current);
  }, [interval]);

  return (
  <span className="Whack__time">{`Time: ${internalTime / 1000}s`}</span>
  );
};
 




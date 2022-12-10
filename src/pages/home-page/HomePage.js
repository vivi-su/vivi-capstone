import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { BACK_END } from "../../utils/utils";
import axios from "axios";
import TopHeader from "../../components/top-header/TopHeader";
import PlayHeader from "../../components/play-header/PlayHeader";
import "./HomePage.scss";

export default function HomePage() {
  const [jokes, setJokes] = useState([]);
  const [joke, setJoke] = useState("");
  const [show,setShow] =useState(false);

  useEffect(() => {
    const URL = `${BACK_END}/api/jokes`;

    axios
      .get(URL)
      .then(({ data }) => {
        const randomJoke = data[Math.floor(Math.random() * data.length)];
        setJoke(randomJoke.joke);
        setJokes(data);
        setShow(false)
      })
      .catch((err) => console.log(err));
  }, []);
  
 
  const getJoke =()=>{
    if(jokes){
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(randomJoke.joke);
    setShow(true);
    }
  }



  return (
    <>
      <main className="home">
        <section className="home__top">
          <div className="home__half">
            <div className="home__left">
              <TopHeader />
            </div>
            <AnimatePresence>
              {show && (
                <motion.p
                  className="home__joke"
                  key="joke"
                  initial={{ x: "50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "50%", opacity: 0, transition:{duration:0.1} }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {joke}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <Outlet />
          <PlayHeader />

          <button onClick={() => getJoke()}>Give me a Joke</button>
          {show && (
            <button onClick={() => setShow(false)}>I don't want a Joke</button>
          )}
          <Link to={"/"}>
            <button>Back</button>
          </Link>
        </section>
      </main>
    </>
  );
}

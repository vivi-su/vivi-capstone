import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import {motion} from "framer-motion";
import Bubbles from "../../components/bubbles/Bubbles";
import "./EntryPage.scss";
import planet from "../../assets/images/planet.svg";
import star from "../../assets/images/star.svg";

export default function EntryPage (){
    return (
      <>
        <section
          className="entry"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            width: "100%",
            height: "100%",
          }}
        >
          <motion.img
            drag
            src={star}
            alt="Cute star"
            className="entry__star"
            style={{ position: "absolute", top: 60, left: 30 }}
          ></motion.img>

          <motion.img
            animate={{ rotate: [0, 200, 200, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            src={planet}
            alt="Cute Planet"
            className="entry__planet"
            style={{ position: "absolute", top: 120, right: 30 }}
          ></motion.img>
        </section>
        <Bubbles />

        <Logo
          className="entry__logo"
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate3d(-50%,-50%,0)",
          }}
        />

        <p
          className="entry__tag"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate3d(-50%,-50%,0)",
          }}
        >
        Just Click Me
        </p>

        <Link to={"/play"}>
          <button
            className="entry__explore"
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate3d(-50%,-50%,0)",
            }}
          >
            Explore
          </button>
        </Link>
      </>
    );
}
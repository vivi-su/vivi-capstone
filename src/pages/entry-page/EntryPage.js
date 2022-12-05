import {Link} from "react-router-dom";
import "./EntryPage.scss";
import {ReactComponent as Logo} from "../../assets/images/logo.svg"
// import bg from "../../assets/images/first-page-bg.svg";
import planet from "../../assets/images/planet.svg";
import star from "../../assets/images/star.svg";
import {motion} from "framer-motion";

export default function EntryPage (){
    return (
      <>
        <section className="entry">
          <div className="entry__wrapper">
            <motion.img
              drag
              src={star}
              alt="Cute star"
              className="entry__star"
            ></motion.img>
            <motion.img
              animate={{ rotate: [0, 200, 200, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              src={planet}
              alt="Cute Planet"
              className="entry__planet"
            ></motion.img>
          </div>
          <div className="entry__title">
            <Logo className="entry__logo" />
            <p className="entry__tag">Just Click Me</p>
            <Link to={"/play"}>
              <button className="entry__explore">Explore</button>
              <button className="entry__explore entry__explore--z">
                Explore
              </button>
            </Link>
          </div>
          {/* <img src={bg} alt="Background kids" className="entry__bg"></img> */}
        </section>
      </>
    );
}
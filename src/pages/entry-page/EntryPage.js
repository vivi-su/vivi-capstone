import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import {motion} from "framer-motion";
import "./EntryPage.scss";
import planet from "../../assets/images/planet.svg";
import star from "../../assets/images/star.svg";

export default function EntryPage (){
    return (
      <>
        <section className="entry">
          <section className="entry__wrapper">
            <div className="entry__img-wrapper">
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
          </section>
        </section>
      </>
    );
}
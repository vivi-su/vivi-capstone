import {Link} from "react-router-dom";
import {ReactComponent as BackIcon} from "../../assets/images/back.svg";
import "./PlayHeader.scss";
import { motion} from "framer-motion";
import star from "../../assets/images/star.svg";

export default function PlayHeader(){
    return (
      <>
        <section className="home__row-wrap">
          <ul>
            <Link to={"drum"}>
              <li className="home__li">Drumming on the Keyboard</li>
              <li className="home__li home__li--z">Drumming on the Keyboard</li>
            </Link>
            <Link to={"draw"}>
              <li className="home__li">Drawing on Canvas</li>
              <li className="home__li home__li--z">Drawing on Canvas</li>
            </Link>
            <Link to={"whack"}>
              <li className="home__li">Whack a mole</li>
              <li className="home__li home__li--z">Whack a mole</li>
            </Link>
          </ul>
          <motion.img
            drag
            src={star}
            alt="Cute star"
            className="home__star"
          ></motion.img>
          <Link to={"/"}>
            <button className="home__back-btn">
              <BackIcon className="home__back-img" />
            </button>
          </Link>
        </section>
      </>
    );
}
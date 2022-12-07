import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import "./TopHeader.scss";
import sun from "../../assets/images/sun.svg"


export default function TopHeader (){
  

    return (
      <div className="topHeader">
        <ul>
          <Link className="topHeader__link" to={"disney"}>
            <motion.img src={sun} alt="sun" 
            whileHover={{scale:1.1}} className="topHeader__img" />{" "}
            <li className="topHeader__li">
              Check out <br />
              <span className="topHeader__span">Disney</span>
            </li>
          </Link>
        </ul>
      </div>
    );
}
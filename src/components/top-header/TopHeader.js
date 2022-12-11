import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import "./TopHeader.scss";
import sun from "../../assets/images/sun.svg"


export default function TopHeader (){
  

    return (
      <div className="topHeader">
     
          <Link className="topHeader__link" to={"disney"}>
            <motion.img
              src={sun}
              alt="sun icon"
              whileHover={{ scale: 1.1 }}
              className="topHeader__img"
            />{" "}
            <p className="topHeader__p">
            Disney</p>
         
          </Link>
       
      </div>
    );
}
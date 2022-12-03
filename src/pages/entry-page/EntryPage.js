import {Link} from "react-router-dom";
import "./EntryPage.scss";
import {ReactComponent as Logo} from "../../assets/images/logo.svg"
import bg from "../../assets/images/first-page-bg.svg";
import planet from "../../assets/images/planet.svg";
import star from "../../assets/images/star.svg";

export default function EntryPage (){
    return (
      <>
        <section className="entry">
         
            <img src={planet} alt="Cute Planet" className="entry__planet"></img>
            <img src={star} alt="Cute star" className="entry__star"></img>
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
            <img src={bg} alt="Background kids" className="entry__bg"></img>
          
        </section>
      </>
    );
}
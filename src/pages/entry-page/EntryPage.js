import {Link} from "react-router-dom";
import "./EntryPage.scss";
import {ReactComponent as Logo} from "../../assets/images/logo.svg"

export default function EntryPage (){
    return (
      <>
        <section className="home">
          <div className="home__title">
            <Logo className="home__logo" />
            <p className="home__tag">Just Click Me</p>
            <Link to={"/play"}>
              <button className="home__explore">Explore</button>
              <button className="home__explore home__explore--z">
                Explore
              </button>
            </Link>
          </div>
        </section>
      </>
    );
}
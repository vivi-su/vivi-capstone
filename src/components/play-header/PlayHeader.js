import {Link} from "react-router-dom";
import "./PlayHeader.scss";

export default function PlayHeader(){
    return (
      <>
        <section>
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
         
        </section>
    
      </>
    );
}
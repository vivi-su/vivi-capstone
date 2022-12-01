import {Link} from "react-router-dom";
import "./PlayHeader.scss";

export default function PlayHeader(){
    return (
      <>
        <section>
          <ul>
            <Link to={"drum"}>
              <li>Drumming on the Keyboard</li>
            </Link>
            <Link to={"draw"}>
              <li>Drawing on Canvas</li>
            </Link>
            <Link to={"whack"}>
              <li>Whack a mole</li>
            </Link>
          </ul>
          <button>Give me a Joke</button>
        </section>
        <Link to={"/"}><button>Back</button></Link>
      </>
    );
}
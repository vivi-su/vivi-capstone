import {Link} from "react-router-dom";
import "./DisneyPage.scss";
export default function DisneyPage(){

    return (
    <Link to={"/play"}><button className="Disney__back">Back to play</button></Link>
    );
}
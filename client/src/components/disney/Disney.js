import { v4 as uuidv4 } from "uuid";
import { NavLink} from "react-router-dom";

export default function Disney({items, detail, show, setShow}) {
    
  return (
    <>
      <main className="disney">
        <section className="disney__container">
          <div className="disney__img-group">
            {items.map((item) => (
              <NavLink to={`/play/disney/${item._id}`} key={uuidv4()}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="disney__cartoon-img"
                  onClick={() => setShow(true)}
                ></img>
              </NavLink>
            ))}
          </div>
          <NavLink to={"/play"} className="disney__btn">
            <button>Back to play</button>
          </NavLink>
        </section>
        {show && (
          <section className="disney__pop">
            <p onClick={() => setShow(false)} className="disney__pop-x">x</p>
            <h1>Name:{detail.name}</h1>
            <p>TV SHOWS: {detail.tvShows}</p>
          </section>
        )}
      </main>
    </>
  );
}

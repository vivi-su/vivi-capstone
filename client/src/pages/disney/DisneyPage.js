import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./DisneyPage.scss";
export default function DisneyPage(){

    const [items, setItems]=useState([]);

    useEffect(() => {
        
      const DISNEY_URL = `https://api.disneyapi.dev/characters/`;
      axios.get(DISNEY_URL)
            .then(({ data }) => {
              setItems(data.data);
            });
            }, []);
    return (
      <>
        <main className="disney">
          <Link to={"/play"}>
            <button>Back to play</button>
          </Link>
          {items.map((item) => (
            <div key={uuidv4()}>
            <p>{item.name}</p>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="disney__cartoon-img"
              ></img>
            </div>
          ))}
        </main>
      </>
    );
}
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { DISNEY_URL } from "../../utils/utils";
import {selectedByID_URL} from "../../utils/utils";

import "./DisneyPage.scss";
import Disney from "../../components/disney/Disney";

const PAGE_DISNEY_URL =(num)=> DISNEY_URL+`?page=${num}`;

export default function DisneyPage() {
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState({});
  const [show, setShow] = useState(false);
  const { disneyID } = useParams();
  const formRef = useRef();

  useEffect(() => {
    axios.get(DISNEY_URL).then(({ data }) => {
      setItems(data.data);
    });
  }, []);

  useEffect(() => {
    if(!disneyID) {return}
    axios.get(selectedByID_URL(disneyID)).then(({ data }) => {
     setDetail(data);
    }).catch((err)=>console.log("Error",err));
  }, [disneyID]);

  const handelSearchPage =(e)=>{
    e.preventDefault();
    const pageNumber = formRef.current.typePageInput.value;
    axios.get(PAGE_DISNEY_URL(pageNumber))
         .then(({data})=>{
          setItems(data.data)
         }).catch((err)=>{
          console.log("Error", err);
         })
    formRef.current.reset();
  }

  const handelSearchName =(e)=>{
    e.preventDefault();
    const searchName = formRef.current.searchName.value;
    const searcheditem = items.filter((item)=>item.name.includes(searchName));
    setItems(searcheditem);
    formRef.current.reset();
  }

  return (
    <>
      <main className="disney">
        <form ref={formRef} className="disney__form">
          <div className="disney__form-group">
            <input
              type="number"
              name="typePageInput"
              placeholder="Number"
              className="disney__form-input"
            ></input>
            <button
              onClick={handelSearchPage}
              className="disney__form-btn disney__form-btn--one"
            >
              Search Page
            </button>
          </div>
          <div className="disney__form-group">
            <input
              type="search"
              name="searchName"
              min={1}
              max={149}
              placeholder="Name"
              className="disney__form-input"
            ></input>
            <button onClick={handelSearchName} className="disney__form-btn">
              Search Charactor
            </button>
          </div>
        </form>
        <Disney items={items} detail={detail} show={show} setShow={setShow} />
      </main>
    </>
  );
}

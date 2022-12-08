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
      <form ref={formRef}>
        <input type="number" name="typePageInput"></input>
        <button onClick={handelSearchPage}>Search Page</button>
        <input
          type="search"
          name="searchName"
          minNumber={1}
          maxNumber={149}
        ></input>
        <button onClick={handelSearchName}>Search Charactor</button>
      </form>
      <Disney items={items} detail={detail} show={show} setShow={setShow} />
    </>
  );
}

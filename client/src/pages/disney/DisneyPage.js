import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DISNEY_URL } from "../../utils/utils";
import {selectedByID_URL} from "../../utils/utils";

import "./DisneyPage.scss";
import Disney from "../../components/disney/Disney";

   

export default function DisneyPage() {
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState({});
  const [show, setShow] = useState(false);
  const { disneyID } = useParams();

  useEffect(() => {
    axios.get(DISNEY_URL).then(({ data }) => {
      setItems(data.data);
    });
  }, []);

  useEffect(() => {
    if(!disneyID) {return}
    axios.get(selectedByID_URL(disneyID)).then(({ data }) => {
     setDetail(data);
    });
  }, [disneyID]);

  return (
    <>
        <Disney items={items} detail={detail} show={show} setShow={setShow} />
    </>
  );
}

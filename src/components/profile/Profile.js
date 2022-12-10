import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_END } from "../../utils/utils";

export default function Profile({ haveToken, setHaveToken }) {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${BACK_END}/api/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setHaveToken(true);
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <>{haveToken && <p> Hello {userInfo.name}</p>}</>;
}

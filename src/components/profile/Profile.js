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

 const handleSignout = ()=>{
    sessionStorage.removeItem("token");
    window.location.reload(false);
 }

  return (
    <>
      {haveToken && (
        <div>
          <p>Hello {userInfo.name}</p>
          <button onClick={handleSignout}>Sign Out</button>
        </div>
      )}
        

    </>
  );
}

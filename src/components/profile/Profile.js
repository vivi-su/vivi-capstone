import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_END } from "../../utils/utils";
import "./Profile.scss";

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
        <section className="profile">
          <div className="profile__wrap">
            <p className="profile__p">
              😃 <span>&nbsp;</span> Hello {userInfo.name}
            </p>
            <button onClick={handleSignout} className="profile__btn">
              Sign Out
            </button>
          </div>
        </section>
      )}
    </>
  );
}

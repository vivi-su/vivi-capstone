import TopHeader from "../../components/top-header/TopHeader";
import PlayHeader from "../../components/play-header/PlayHeader";
import { Outlet } from "react-router-dom";
import bg from "../../assets/images/first-page-bg.svg";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
    <main className="home">
      <TopHeader />
      <Outlet />
      <PlayHeader />
      <img src={bg} alt="background kids action" className="home__bg"/>
    </main>
    </>
  );
}

import TopHeader from "../../components/top-header/TopHeader";
import PlayHeader from "../../components/play-header/PlayHeader";
import { Outlet } from "react-router-dom";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
    <main className="home">
      <section className="home__top">
        <TopHeader />
        <Outlet />
        <PlayHeader />
      </section>
    </main>
    </>
  );
}

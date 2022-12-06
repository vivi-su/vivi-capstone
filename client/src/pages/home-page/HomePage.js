import TopHeader from "../../components/top-header/TopHeader";
import PlayHeader from "../../components/play-header/PlayHeader";
import { Outlet, Link } from "react-router-dom";
import "./HomePage.scss";

export default function HomePage() {
  
  return (
    <>
      <main className="home">
        <section className="home__top">
          <TopHeader />
          <p>Joke</p>
          <Outlet />
          <PlayHeader />

          <button>Give me a Joke</button>
          <Link to={"/"}>
            <button>Back</button>
          </Link>

        </section>
      </main>
    </>
  );
}

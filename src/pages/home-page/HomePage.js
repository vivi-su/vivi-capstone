import TopHeader from "../../components/top-header/TopHeader";
import PlayHeader from "../../components/play-header/PlayHeader";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <>
    <TopHeader />
    <Outlet />  
    <PlayHeader />
    </>
  );
}

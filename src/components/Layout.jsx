import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Outlet />
    </>
  );
}

import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

import { Outlet } from "react-router";
import SectionContacto from "../components/common/SectionContacto";
import SectionPreguntas from "../components/common/preguntas/SectionPreguntas";

export default function SupportLayout() {
  return (
    <>
      <Outlet />
      <SectionContacto />
      <SectionPreguntas />
    </>
  );
}

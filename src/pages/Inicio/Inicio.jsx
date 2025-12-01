import Hero from "./components/Hero";
import SectionDescripcion from "./components/SectionDescripcion";
import SectionServicios from "./components/servicios/SectionServicios";
import SectionEquipo from "./components/SectionEquipo";
import SectionReviews from "./components/SectionReviews";
import SectionOferta from "./components/SectionOferta";
import SectionPlanes from "./components/SectionPlanes";
import SectionContacto from "../../components/common/SectionContacto";
import SectionPreguntas from "../../components/common/preguntas/SectionPreguntas";

export default function Inicio() {
  return (
    <>
      <Hero />
      <SectionDescripcion />
      <SectionServicios />
      <SectionEquipo />
      <SectionReviews />
      <SectionOferta />
      <SectionPlanes />
      <SectionContacto />
      <SectionPreguntas />
    </>
  );
}

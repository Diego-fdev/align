import SectionPreguntas from "../../components/common/preguntas/SectionPreguntas";
import SectionContacto from "../../components/common/SectionContacto";
import SectionDescripcion from "../Inicio/components/SectionDescripcion";
import SectionDiscount from "./components/SectionDiscount";
import SectionMainServices from "./components/SectionMainServices";

export default function Servicios() {
  return (
    <>
      <SectionMainServices />
      <SectionDescripcion />
      <SectionDiscount />
    </>
  );
}

import SectionPreguntas from "../../components/common/preguntas/SectionPreguntas";
import SectionContacto from "../../components/common/SectionContacto";

export default function Contacto() {
  return (
    <>
      <SectionContacto customStyles="pt-32 lg:pt-40 xl:pt-52" />
      <SectionPreguntas />
    </>
  );
}

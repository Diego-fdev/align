import SectionPreguntas from "../../components/common/preguntas/SectionPreguntas";
import SectionContacto from "../../components/common/SectionContacto";
import CustomMainSection from "../../components/CustomMainSection";
import SectionPlanes from "../Inicio/components/SectionPlanes";
import CardJoin from "./components/CardJoin";
import SectionEleccion from "./components/SectionEleccion";

export default function Planes() {
  return (
    <>
      <SectionPlanes
        isMainSection={true}
        customStyles="pt-32 lg:pt-40 xl:pt-52"
      />
      <SectionEleccion />
      <CustomMainSection>
        <CardJoin />
      </CustomMainSection>
      <SectionContacto />
      <SectionPreguntas />
    </>
  );
}

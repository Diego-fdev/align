import SectionPlanes from "../Inicio/components/SectionPlanes";
import SectionEleccion from "./components/SectionEleccion";

export default function Planes() {
  return (
    <>
      <SectionPlanes
        isMainSection={true}
        customStyles="pt-32 lg:pt-40 xl:pt-52"
      />
      <SectionEleccion />
    </>
  );
}

import Hero from "./components/Hero";
import SectionDescripcion from "./components/index/SectionDescripcion";
import SectionServicios from "./components/index/sectionServicios/SectionServicios";
import Nav from "./components/Nav";
import SectionContacto from "./components/SectionContacto";
import SectionEquipo from "./components/SectionEquipo";
import SectionOferta from "./components/SectionOferta";
import SectionPlanes from "./components/SectionPlanes";
import SectionPreguntas from "./components/index/sectionPreguntas/SectionPreguntas";
import SectionReviews from "./components/SectionReviews";

function App() {
  return (
    <>
      <Nav />
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

export default App;

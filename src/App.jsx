import Hero from "./components/Hero";
import SectionDescripcion from "./components/index/SectionDescripcion";
import SectionServicios from "./components/index/sectionServicios/SectionServicios";
import Nav from "./components/Nav";
import SectionEquipo from "./components/SectionEquipo";
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
    </>
  );
}

export default App;

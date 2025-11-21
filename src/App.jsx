import Hero from "./components/Hero";
import SectionDescripcion from "./components/index/SectionDescripcion";
import SectionServicios from "./components/index/sectionServicios/SectionServicios";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <SectionDescripcion />
      <SectionServicios />
    </>
  );
}

export default App;

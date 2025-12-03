import SectionPreguntas from "../../components/common/preguntas/SectionPreguntas";
import SectionContacto from "../../components/common/SectionContacto";
import CustomMainSection from "../../components/CustomMainSection";
import SectionPosts from "./components/posts/SectionPosts";

export default function Blog() {
  return (
    <CustomMainSection customStyles="pt-32 lg:pt-40 xl:pt-52 flex flex-col gap-12">
      <header className="flex flex-col gap-4 items-center  mx-auto">
        <h1 className="first-letter:capitalize text-4xl sm:text-5xl tracking-tight xl:text-7xl 2xl:text-8 text-center max-w-[350px] mx-auto sm:max-w-[400px] xl:max-w-[600px]">
          Blog fitness para los más exigentes
        </h1>
        <p className="text-sm tracking-tight xl:text-base 2xl:text-lg text-center max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]">
          Quiero mostrarles a los demás que tenemos el poder de superar
          cualquier obstáculo si luchamos y cambiamos de opinión con el tiempo.
          Espero mostrarles que, sin importar lo que estemos pasando, podemos
          salir de ello mucho más fuertes.
        </p>
      </header>
      <SectionPosts />
      <SectionContacto />
      <SectionPreguntas />
    </CustomMainSection>
  );
}

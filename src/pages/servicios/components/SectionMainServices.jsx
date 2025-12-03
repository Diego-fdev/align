import { BicepsFlexed, Dumbbell, HeartPlus } from "lucide-react";
import MainCard from "../../../components/cards/MainCard";
import CustomMainSection from "../../../components/CustomMainSection";

const infoServicios = [
  {
    id: 1,
    icono: BicepsFlexed,
    titulo: "clases de yoga",
    texto:
      "clases para todos los niveles, desde principantes a expertos. Disfruta de diferentes estilos como Hatha, Vinyasa y Yin Yoga.",
  },
  {
    id: 2,
    icono: Dumbbell,
    titulo: "entrenamiento fitness",
    texto:
      "Nuestros entrenadores expertos ofrecen entrenamientos personalizados y apoyo continuo para perder peso, desarrollar músculos y mejorar la salud.",
  },
  {
    id: 3,
    icono: HeartPlus,
    titulo: "talleres de bienestar",
    texto:
      "Talleres de mindfulness, gestión del estrés y salud holística. Adquiera conocimientos valiosos y herramientas prácticas para mejorar su bienestar físico y mental.",
  },
];

export default function SectionMainServices() {
  return (
    <CustomMainSection customStyles="pt-32 lg:pt-40 xl:pt-52 flex flex-col gap-12">
      <header className="flex flex-col gap-4 items-center  mx-auto">
        <h1 className="first-letter:capitalize text-4xl sm:text-5xl tracking-tight xl:text-7xl 2xl:text-8 text-center max-w-[350px] mx-auto sm:max-w-[400px] xl:max-w-[600px]">
          nuestros servicios
        </h1>
        <p className="text-sm tracking-tight xl:text-base 2xl:text-lg text-center max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]">
          Seas un principiante o un practicante avanzado, nuestras ofertas están
          diseñadas para inspirarlo y apoyarlo en su viaje hacia el bienestar.
        </p>
      </header>
      <div className="main-content grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {infoServicios.map((servicio) => {
          const Icon = servicio.icono;
          return (
            <MainCard
              key={servicio.id}
              icon={<Icon className="text-main-color stroke-[1.5]" />}
              title={servicio.titulo}
              text={servicio.texto}
              toggleButton={true}
              customCardStyles={`items-center lg:items-start lg:min-h-[350px] xl:p-8! ${
                servicio.id === 3 &&
                "sm:col-span-2 lg:col-span-1 sm:items-start"
              }`}
              customTitleStyles={`text-center lg:text-left ${
                servicio.id === 3 && "sm:text-left"
              }`}
              customTextStyles={`text-center max-w-[350px]! lg:text-left ${
                servicio.id === 3 && "sm:text-left sm:max-w-[600px]!"
              }`}
            />
          );
        })}
      </div>
    </CustomMainSection>
  );
}

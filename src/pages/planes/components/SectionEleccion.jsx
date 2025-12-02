import { BicepsFlexed } from "lucide-react";
import CustomMainSection from "../../../components/CustomMainSection";
import MainCard from "../../../components/cards/MainCard";

const infoCards = [
  {
    id: 1,
    titulo: "horario flexible",
    texto:
      "Clases para todos los niveles, desde principiantes hasta avanzados.Disfruta de diversos estilos como el Yin Yoga.",
    icono: BicepsFlexed,
  },
  {
    id: 2,
    titulo: "programas personalizados",
    texto:
      "Nuestros servicios van más allá del fitness y el yoga. Ofrecemos asesoramiento nutricional.",
    icono: BicepsFlexed,
  },
  {
    id: 3,
    titulo: "instructoras expertas",
    texto:
      "Nuestro equipo de instructores certificados y experimentados está dedicado a ayudarlo a alcanzar sus objetivos de fitness y bienestar.",
    icono: BicepsFlexed,
  },
  {
    id: 4,
    titulo: "enfoque integral de bienestar",
    texto:
      "Nuestros servicios van más allá del fitness y el yoga. Ofrecemos asesoramiento nutricional.",
    icono: BicepsFlexed,
  },
];

export default function SectionEleccion() {
  return (
    <CustomMainSection customStyles="flex flex-col gap-12">
      <div className="flex flex-col gap-8 items-center md:items-end md:flex-row md:justify-between">
        <div className="texto flex flex-col gap-2">
          <h2 className="text-4xl sm:text-[42px] tracking-tight xl:text-5xl 2xl:text-[54px] first-letter:capitalize text-center md:text-left">
            por qué elegirnos
          </h2>
          <p className="text-sm tracking-tight xl:text-base 2xl:text-lg text-center max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] md:text-left">
            Nuestro compromiso con tu bienestar va más allá de las clases y los
            entrenamientos. Descubre los beneficios únicos que nos distinguen y
            asegúrate de tener la mejor experiencia en tu camino hacia el
            bienestar.
          </p>
        </div>
        <button className="w-fit bg-main-black py-3 px-8 rounded-full">
          <span className="text-sm tracking-tight xl:text-base 2xl:text-lg text-main-white capitalize">
            unirme
          </span>
        </button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
        {infoCards.map((card) => {
          const Icono = card.icono;
          return (
            <MainCard
              title={card.titulo}
              text={card.texto}
              icon={<Icono className="text-main-color" />}
              customButtonText={"unirme"}
              customTitleStyles={"sm:mb-4 2xl:mb-4"}
              customButtonStyles={"xl:mt-0"}
              customCardStyles={"xl:min-h-fit!"}
            />
          );
        })}
      </div>
    </CustomMainSection>
  );
}

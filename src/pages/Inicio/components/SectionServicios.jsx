import CustomMainSection from "../../../components/CustomMainSection";
import MainCard from "../../../components/cards/MainCard";
import { infoServices } from "../../../constants/services";

export default function SectionServicios() {
  return (
    <CustomMainSection customStyles={"flex flex-col gap-12"}>
      <header className="flex flex-col gap-4 2xl:gap-6 max-w-[400px] sm:max-w-[500px] md:max-w-[700px] mx-auto lg:max-w-full">
        <h2 className="text-4xl sm:text-[42px] text-center tracking-tight xl:text-5xl 2xl:text-[54px]">
          Yoga para cada cuerpo y cada mente
        </h2>
        <p className="text-sm text-center md:max-w-[550px] mx-auto xl:text-base 2xl:text-lg 2xl:max-w-[600px]">
          Descubre nuestra variada oferta diseñada para ayudarte a encontrar
          equilibrio, flexibilidad y tranquilidad.
        </p>
      </header>
      <div className="cards-container w-full overflow-hidden grid gap-12 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {infoServices.map((card) => {
          const Icon = card.icon;
          return (
            <MainCard
              key={card.id}
              title={card.titulo}
              text={card.texto}
              icon={
                <Icon
                  className={`stroke-[1.5] w-5 h-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 ${
                    card.tipo === "main" ? "text-main-black" : "text-main-color"
                  }`}
                />
              }
              type={card.tipo}
            />
          );
        })}
      </div>
    </CustomMainSection>
  );
}

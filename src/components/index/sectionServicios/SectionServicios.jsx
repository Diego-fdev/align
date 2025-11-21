import CustomMainSection from "../../CustomMainSection";
import { HeartPlus, Dumbbell, Brain } from "lucide-react";
import CardServicios from "./CardServicios";

const infoCards = [
  {
    id: 1,
    titulo: "Clases de yoga para principiantes",
    texto:
      "Perfectas para quienes se inician en el yoga, nuestras clases para principiantes se centran en posturas básicas, técnicas de respiración y alineación. No se requiere experiencia, ¡solo una mente abierta!",
    tipo: "base",
    icon: Brain,
  },
  {
    id: 2,
    titulo: "Yoga de poder",
    texto:
      "¿Buscas un entrenamiento más intenso? Nuestras clases de Power Yoga combinan posturas para fortalecer los músculos y movimientos dinámicos, ayudándote a desarrollar músculo, mejorar la resistencia y energizar tu cuerpo.",
    tipo: "base",
    icon: Dumbbell,
  },
  {
    id: 3,
    titulo: "yoga restorativa",
    texto:
      "Relájate con nuestra clase de yoga restaurativa de ritmo lento, diseñada para liberar la tensión y promover una relajación profunda. Estas posturas suaves ayudan a calmar el sistema nervioso, lo que la hace ideal para aliviar el estrés.",
    tipo: "main",
    icon: HeartPlus,
  },
];

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
        {infoCards.map((card) => {
          const Icon = card.icon;
          return (
            <CardServicios
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

        {/*         <CardServicios
          title="yoga restorativa"
          text="Relájate con nuestra clase de yoga restaurativa de ritmo lento,
              diseñada para liberar la tensión y promover una relajación
              profunda. Estas posturas suaves ayudan a calmar el sistema
              nervioso, lo que la hace ideal para aliviar el estrés."
          icon={
            <Dumbbell className="stroke-[1.5] w-5 h-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 text-main-color" />
          }
          type=""
        />
        <CardServicios
          title="yoga restorativa"
          text="Relájate con nuestra clase de yoga restaurativa de ritmo lento,
              diseñada para liberar la tensión y promover una relajación
              profunda. Estas posturas suaves ayudan a calmar el sistema
              nervioso, lo que la hace ideal para aliviar el estrés."
          icon={
            <HeartPlus className="stroke-[1.5] w-5 h-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
          }
          type="main"
        /> */}
        {/*         <div className="card bg-main-black p-6 flex flex-col gap-8 rounded-3xl relative w-full">
          <div className="ilustracion-card absolute -top-20 sm:top-auto sm:-bottom-20 -right-20 opacity-50 overflow-hidden">
            <MainIcon customHeight={"200"} customWidth={"200"} />
          </div>
          <div className="icon rounded-full bg-main-color w-14 h-14 flex items-center justify-center">
            <HeartPlus className="stroke-[1.5] w-5 h-5" />
          </div>
          <div className="card-text flex flex-col gap-2">
            <span className="text-main-white capitalize text-[22px] tracking-tight">
              yoga restorativa
            </span>
            <p className="text-secondary-text-white text-sm leading-[22px]">
              Relájate con nuestra clase de yoga restaurativa de ritmo lento,
              diseñada para liberar la tensión y promover una relajación
              profunda. Estas posturas suaves ayudan a calmar el sistema
              nervioso, lo que la hace ideal para aliviar el estrés.
            </p>
          </div>

          <button className="w-full bg-main-white py-3 rounded-full sm:w-fit sm:px-8">
            <span className="capitalize text-sm font-medium">saber mas</span>
          </button>
        </div> */}
        {/*         <div className="card bg-main-black p-6 2xl:p-7 flex flex-col gap-8 xl:min-h-[410px] 2xl:min-h-[475px] rounded-3xl relative w-full">
          <div className="ilustracion-card absolute -top-20 sm:top-auto sm:-bottom-20 -right-20 xl:-bottom-28 xl:-right-28 opacity-50 overflow-hidden">
            <MainIcon
              customSize={"w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"}
            />
          </div>
          <div className="icon rounded-full bg-main-color w-14 h-14 xl:w-15 xl:h-15 2xl:w-16 2xl:h-16 flex items-center justify-center">
            <HeartPlus className="stroke-[1.5] w-5 h-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
          </div>
          <div className="card-text flex flex-col gap-2">
            <span className="text-main-white capitalize text-[22px] xl:text-2xl 2xl:text-[28px] tracking-tight">
              yoga restorativa
            </span>
            <p className="text-secondary-text-white text-sm leading-[22px] xl:text-base xl:leading-6 2xl:text-[18px] tracking-tight 2xl:leading-[30px]">
              Relájate con nuestra clase de yoga restaurativa de ritmo lento,
              diseñada para liberar la tensión y promover una relajación
              profunda. Estas posturas suaves ayudan a calmar el sistema
              nervioso, lo que la hace ideal para aliviar el estrés.
            </p>
          </div>

          <button className="w-full bg-main-white py-3 rounded-full sm:w-fit xl:mt-auto sm:px-8">
            <span className="capitalize text-sm xl:text-base 2xl:text-lg font-medium">
              saber mas
            </span>
          </button>
        </div> */}
        {/*         <div className="card bg-main-black p-6 flex flex-col gap-8 rounded-3xl relative w-full md:col-span-2 lg:col-span-1">
          <div className="ilustracion-card absolute -top-20 sm:top-auto sm:-bottom-20 -right-20 opacity-50 overflow-hidden">
            <MainIcon customHeight={"200"} customWidth={"200"} />
          </div>
          <div className="icon rounded-full bg-main-color w-14 h-14 flex items-center justify-center">
            <HeartPlus className="stroke-[1.5] w-5 h-5" />
          </div>
          <div className="card-text flex flex-col gap-2">
            <span className="text-main-white capitalize text-[22px] tracking-tight">
              yoga restorativa
            </span>
            <p className="text-secondary-text-white text-sm leading-[22px]">
              Relájate con nuestra clase de yoga restaurativa de ritmo lento,
              diseñada para liberar la tensión y promover una relajación
              profunda. Estas posturas suaves ayudan a calmar el sistema
              nervioso, lo que la hace ideal para aliviar el estrés.
            </p>
          </div>

          <button className="w-full bg-main-white py-3 rounded-full sm:w-fit sm:px-8">
            <span className="capitalize text-sm font-medium">saber mas</span>
          </button>
        </div> */}
      </div>
    </CustomMainSection>
  );
}

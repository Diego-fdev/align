import CustomMainSection from "./CustomMainSection";
import { Swiper, SwiperSlide } from "swiper/react";
import MainCard from "./cards/MainCard";
import { MoveRight } from "lucide-react";
import imagenMiembroEquipoUno from "../assets/equipo/miembro-1.webp";
import imagenMiembroEquipoDos from "../assets/equipo/miembro-2.webp";
import imagenMiembroEquipoTres from "../assets/equipo/miembro-3.webp";

// Import Swiper styles
import "swiper/css";

const infoEquipo = [
  {
    id: 1,
    nombre: "claire ford",
    imagenSrc: imagenMiembroEquipoUno,
  },
  {
    id: 2,
    nombre: "alicia regis",
    imagenSrc: imagenMiembroEquipoDos,
  },
  {
    id: 3,
    nombre: "lena parker",
    imagenSrc: imagenMiembroEquipoTres,
  },
];

export default function SectionEquipo() {
  return (
    <CustomMainSection customStyles={"flex flex-col gap-12"}>
      <header className="w-full flex items-center lg:items-start lg:gap-4 flex-col gap-1">
        <span className="capitalize tracking-tight text-sm xl:text-base 2xl:text-lg">
          nuestro equipo
        </span>
        <h2 className="capitalize text-4xl text-center tracking-tight max-w-[250px] sm:text-[40px] sm:max-w-full md:text-5xl lg:text-start xl:text-5xl 2xl:text-[54px]">
          conoce a nuestro equipo
        </h2>
      </header>
      <div className="contenido-equipo flex flex-col gap-8 lg:flex-row lg:gap-[15px]">
        <MainCard
          type={"team"}
          title={"entrenamiento personalizado"}
          text={
            "Sesiones individuales con nuestros expertos en fitness y yoga. Recibe orientación y motivación personalizadas para alcanzar tus objetivos específicos."
          }
          customButtonStyles={"w-fit! px-8"}
          customTitleStyles={"text-3xl! mb-2 xl:text-4xl!"}
          customCardStyles={"lg:flex-1 lg:mb-12 xl:min-h-full! 2xl:min-h-full!"}
        />
        {infoEquipo.map((miembro) => (
          <div
            key={miembro.id}
            className="miembro-equipo hidden lg:flex flex-col gap-2 lg:flex-1 lg:min-w-[218px]"
          >
            <div className="imagen miembro-equipo overflow-hidden rounded-3xl w-fit h-fit mx-auto max-w-[350px] sm:mx-0 sm:max-w-full lg:h-full">
              <img src={miembro.imagenSrc} alt="" />
            </div>
            <footer className="w-full flex justify-between px-2 py-2">
              <span className="capitalize tracking-tight">
                {miembro.nombre}
              </span>
              <button className="w-fit flex gap-2 items-center">
                <span className="capitalize text-sm font-medium tracking-tight">
                  conocer mas
                </span>
                <MoveRight
                  className="w-3 h-3 xl:w-4 xl:h-4 text-main-black"
                  strokeWidth={3}
                />
              </button>
            </footer>
          </div>
        ))}
        <Swiper
          slidesPerView={1.1}
          breakpoints={{
            480: {
              slidesPerView: 1.6,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2.1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          spaceBetween={15}
          loop
          className="w-full lg:hidden!"
        >
          {infoEquipo.map((miembro) => (
            <SwiperSlide key={miembro.id}>
              <div className="imagen miembro-equipo overflow-hidden rounded-3xl w-fit h-fit sm:max-w-full lg:h-full">
                <img src={miembro.imagenSrc} alt="" />
              </div>
              <footer className="w-full flex justify-between px-2 py-2">
                <span className="capitalize tracking-tight">
                  {miembro.nombre}
                </span>
                <button className="w-fit flex gap-2 items-center">
                  <span className="capitalize text-sm font-medium tracking-tight">
                    conocer mas
                  </span>
                  <MoveRight
                    className="w-3 h-3 text-main-black xl:w-4 xl:h-4"
                    strokeWidth={3}
                  />
                </button>
              </footer>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </CustomMainSection>
  );
}

import MainCard from "../../../components/cards/MainCard";
import CustomMainSection from "../../../components/CustomMainSection";
import imagenMiembroEquipoUno from "../../../assets/equipo/miembro-1.webp";
import imagenMiembroEquipoDos from "../../../assets/equipo/miembro-2.webp";
import imagenMiembroEquipoTres from "../../../assets/equipo/miembro-3.webp";
import { MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

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
  {
    id: 4,
    nombre: "claire ford",
    imagenSrc: imagenMiembroEquipoUno,
  },
  {
    id: 5,
    nombre: "alicia regis",
    imagenSrc: imagenMiembroEquipoDos,
  },
  {
    id: 6,
    nombre: "lena parker",
    imagenSrc: imagenMiembroEquipoTres,
  },
];

export default function SectionTutoras() {
  return (
    <CustomMainSection customStyles="pt-32 lg:pt-40 xl:pt-52">
      <header className="flex flex-col gap-4 items-center  mx-auto">
        <h1 className="capitalize text-4xl sm:text-5xl tracking-tight xl:text-7xl 2xl:text-8 text-center">
          conoce al equipo
        </h1>
        <p className="text-sm tracking-tight xl:text-base 2xl:text-lg text-center max-w-[500px] lg:max-w-[600px]">
          Seas un principiante o un practicante avanzado, nuestras ofertas están
          diseñadas para inspirarlo y apoyarlo en su viaje hacia el bienestar.
        </p>
      </header>
      <div className="main-content pt-12 flex flex-col gap-8">
        <div className="top-content grid md:grid-cols-3 md:gap-4">
          <MainCard
            title="entrenamientos personalizados"
            text="Sesiones individuales con nuestros expertos en fitness y yoga. Recibe orientación y motivación personalizadas para alcanzar tus objetivos.
"
            type="team"
            customTitleStyles="text-3xl! md:text-2xl!"
            customCardStyles="md:mb-12"
          />
          {infoEquipo.slice(0, 2).map((miembro) => (
            <div
              key={miembro.id}
              className="miembro-equipo flex-col gap-2 lg:flex-1 lg:min-w-[218px] hidden md:flex"
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
        </div>
        <div className="bottom-content">
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
            className="w-full md:hidden!"
          >
            {infoEquipo.map((miembro) => (
              <SwiperSlide
                key={miembro.id}
                className={
                  miembro.id === 1 || miembro.id === 2 ? "md:hidden" : ""
                }
              >
                <div
                  className={`imagen miembro-equipo overflow-hidden rounded-3xl w-fit h-fit sm:max-w-full lg:h-full ${
                    miembro.id === 1 || miembro.id === 2 ? "md:hidden" : ""
                  }`}
                >
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
              1024: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            spaceBetween={15}
            loop
            className="w-full hidden! md:flex!"
          >
            {infoEquipo.slice(2, 6).map((miembro) => (
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
      </div>
    </CustomMainSection>
  );
}

import imagenCard from "../../../assets/contacto.webp";
export default function CardJoin() {
  return (
    <div className="grid gap-12 bg-secondary-white/20 p-4 pt-8 rounded-2xl md:grid-cols-2 md:p-8 md:gap-8">
      <div className="info flex flex-col items-center gap-4 md:items-start md:justify-center">
        <h2 className="text-4xl sm:text-[42px] tracking-tight xl:text-5xl 2xl:text-[54px] text-center md:text-left">
          Align, tu socio en bienestar mental.
        </h2>
        <p className="text-sm tracking-tight xl:text-base 2xl:text-lg text-center md:text-left">
          Encuentra y reserva tus clases de yoga favoritas desde cualquier lugar
          con nuestra aplicación de yoga.
        </p>
        <button className="bg-main-black px-8 py-3 rounded-full mt-4">
          <span className="text-sm tracking-tight xl:text-base 2xl:text-lg text-main-white capitalize font-medium">
            unirme a la membresía
          </span>
        </button>
      </div>
      <div className="imagen rounded-2xl overflow-hidden md:max-h-[360px] xl:max-h-[380px] 2xl:max-h-[420px]">
        <img src={imagenCard} className="object-[50%_0px]" alt="" />
      </div>
    </div>
  );
}

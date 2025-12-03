import CustomMainSection from "../../../components/CustomMainSection";
import imagenDiscount from "../../../assets/servicios/imagen-discount.webp";

export default function SectionDiscount() {
  return (
    <CustomMainSection customStyles="grid md:grid-cols-2 gap-8">
      <div className="info flex flex-col gap-4 md:justify-center">
        <h2 className="text-4xl sm:text-[42px] tracking-tight xl:text-5xl 2xl:text-[54px] text-center md:text-left">
          25% de descuento en clases de Fitness este verano
        </h2>
        <p className="text-sm tracking-tight xl:text-base 2xl:text-lg text-center md:text-left">
          Una vez que recibamos su solicitud de consulta, le asignaremos un
          entrenador. Esto nos permite asegurarnos de que sus objetivos,
          necesidades y personalidades sean compatibles.
        </p>
        <button className="bg-main-black px-8 py-3 rounded-full md:w-fit md:mt-4">
          <span className="text-main-white capitalize tracking-tight font-medium ">
            ser miembro
          </span>
        </button>
      </div>
      <div className="imagen rounded-2xl overflow-hidden sm:h-[50vw] md:h-[45vw] lg:h-[40vw] xl:h-[500px] 2xl:h-[550px]">
        <img src={imagenDiscount} alt="" />
      </div>
    </CustomMainSection>
  );
}

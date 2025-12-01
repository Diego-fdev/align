import CustomMainSection from "../../../components/CustomMainSection";
import cardOfertaImage from "../../../assets/CardOfertaImage.webp";
export default function SectionOferta() {
  return (
    <CustomMainSection>
      <div className="card-oferta bg-main-black p-4 pt-8 rounded-3xl grid gap-8 max-w-[600px] mx-auto md:max-w-full md:grid-cols-2 md:gap-4 md:p-8 md:h-[315px] lg:h-fit lg:gap-20">
        <div className="info-oferta flex flex-col gap-4 max-w-[400px] mx-auto md:h-full lg:gap-8 lg:max-w-full w-full lg:justify-center">
          <h2 className="text-4xl text-main-white text-center md:text-3xl md:text-left lg:text-5xl lg:leading-14 tracking-tight lg:max-w-[500px] 2xl:max-w-[550px] 2xl:text-[54px]">
            Mente clara, tu aliada para el bienestar mental.
          </h2>
          <p className="text-center text-secondary-text-white text-sm md:text-left xl:text-base lg:max-w-[400px] 2xl:max-w-[500px] 2xl:text-lg">
            Encuentra y reserva tus clases de yoga favoritas desde cualquier
            lugar con nuestra aplicación de yoga.
          </p>
          <button className="w-full py-3 bg-main-white rounded-full md:mt-auto md:w-fit md:px-8 lg:mt-8 ">
            <span className="capitalize text-sm xl:text-base 2xl:text-lg font-semibold tracking-tight">
              ser miembro
            </span>
          </button>
        </div>
        <div className="imagen-oferta rounded-3xl overflow-hidden  2xl:h-[500px]">
          <img src={cardOfertaImage} alt="" />
        </div>
      </div>
    </CustomMainSection>
  );
}

import imagenContacto from "../../assets/contacto.webp";
import CustomMainSection from "../CustomMainSection";
import InputForm from "../inputs/InputForm";
import MainIcon from "../../icons/MainIcon";

export default function SectionContacto({ customStyles }) {
  return (
    <CustomMainSection
      customStyles={`grid gap-8 md:grid-cols-2 md:gap-4 ${customStyles}`}
    >
      <div className="imagenContacto rounded-3xl overflow-hidden">
        <img src={imagenContacto} alt="" />
      </div>
      <div className="contacto-main-content bg-main-color p-6 rounded-3xl flex flex-col gap-8 xl:p-8 xl:pt-16 xl:gap-12 relative overflow-hidden">
        <div className="imagen absolute -top-14 -left-14 2xl:-top-30 2xl:-left-30">
          <MainIcon
            customSize={
              "w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] 2xl:w-[300px] 2xl:h-[300px]"
            }
          />
        </div>
        <header className="flex flex-col gap-4 relative">
          <h3 className="text-4xl sm:text-[42px] tracking-tight xl:text-5xl 2xl:text-[54px]">
            Ponte en contacto.
          </h3>
          <p className="text-sm tracking-tight text-secondary-text xl:text-base 2xl:text-lg">
            Quiero ayudarte a superar todos los obstáculos mentales y físicos de
            tu vida diaria. Hace 6 años, me electrocutaron con 277 voltios.
          </p>
        </header>
        <form className="flex flex-col gap-4 lg:h-full xl:gap-8">
          <InputForm
            type={"email"}
            placeholder={"tuemail@ejemplo.com"}
            label={"email *"}
          />
          <InputForm type={"text"} label={"mensaje *"} />
          <button className="w-full bg-main-black py-3 rounded-full mt-4 sm:w-fit sm:px-8 md:self-end lg:mt-auto">
            <span className="text-main-white text-sm capitalize text-medium tracking-tight xl:text-base 2xl:text-lg ">
              ser miembro
            </span>
          </button>
        </form>
      </div>
    </CustomMainSection>
  );
}

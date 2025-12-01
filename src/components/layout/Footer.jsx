import imagenLogo from "../../assets/logo.webp";
import Facebook from "../../icons/Facebook";
import Instagram from "../../icons/Instagram";
import Messenger from "../../icons/Messenger";
import X from "../../icons/X";

export default function Footer() {
  return (
    <footer className="bg-main-black">
      <div className="content-footer w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 2xl:px-0 pt-10 lg:pt-14 2xl:pt-20 grid sm:grid-cols-2 lg:grid-cols-[150px_1fr_1fr] xl:grid-cols-[250px_1.5fr_1fr] 2xl:grid-cols-[1fr_1.5fr_1fr] gap-8 lg:grid-rows-">
        <div className="logo flex items-center gap-2 md:items-start">
          <div className="imagen w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12">
            <img src={imagenLogo} alt="align logo" />
          </div>
          <span className="text-main-white capitalize tracking-tight text-3xl lg:text-4xl xl:text-5xl">
            align
          </span>
        </div>
        <div className="newsletter flex flex-col gap-4 md:col-start-1 lg:col-start-2">
          <p className="text-secondary-text-white text-sm tracking-tight xl:text-base 2xl:text-lg">
            Unete a nuestro boletin de noticias para estar actualizado sobre las
            ultimas novedades
          </p>
          <form className="flex flex-col xl:flex-row xl:flex-wrap gap-2">
            <label
              className="text-main-white text-sm tracking-tight xl:text-base 2xl:text-lg w-full"
              htmlFor=""
            >
              Ingresa tu email
            </label>
            <input
              className="bg-transparent w-full xl:w-fit xl:flex-1 p-2 border-b border-secondary-white text-main-white text-sm tracking-tight xl:text-base 2xl:text-lg"
              type="email"
            />
            <button className="bg-main-white rounded-full py-3 mt-4 xl:px-8 md:mt-8 xl:mt-0">
              <span className="text-main-black capitalize font-semibold text-sm xl:text-base 2xl:text-lg tracking-tight">
                subscribirme
              </span>
            </button>
          </form>
        </div>
        <ul className="redes flex gap-2 w-full justify-center md:row-start-1 md:col-start-2 md:justify-start lg:row-start-2 lg:justify-center">
          <li className="bg-main-white w-fit h-fit p-2 flex items-center justify-center rounded-sm">
            <Instagram customStyles="w-4 h-4 xl:w-6 xl:h-6" />
          </li>
          <li className="bg-main-white w-fit h-fit p-2 flex items-center justify-center rounded-sm">
            <X customStyles="w-4 h-4 xl:w-6 xl:h-6" />
          </li>
          <li className="bg-main-white w-fit h-fit p-2 flex items-center justify-center rounded-sm">
            <Facebook customStyles="w-4 h-4 xl:w-6 xl:h-6" />
          </li>
          <li className="bg-main-white w-fit h-fit p-2 flex items-center justify-center rounded-sm">
            <Messenger customStyles="w-4 h-4 xl:w-6 xl:h-6" />
          </li>
        </ul>
        <nav className="nav-footer lg:col-start-3 ">
          <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap md:flex-col">
            <li>
              <a
                href=""
                className="capitalize text-secondary-text-white py-2 sm:px-2 inline-block text-sm tracking-tight xl:text-base 2xl:text-lg"
              >
                inicio
              </a>
            </li>
            <li>
              <a
                href=""
                className="capitalize text-secondary-text-white py-2 sm:px-2 inline-block text-sm tracking-tight xl:text-base 2xl:text-lg"
              >
                tutores
              </a>
            </li>
            <li>
              <a
                href=""
                className="capitalize text-secondary-text-white py-2 sm:px-2 inline-block text-sm tracking-tight xl:text-base 2xl:text-lg"
              >
                servicios
              </a>
            </li>
            <li>
              <a
                href=""
                className="capitalize text-secondary-text-white py-2 sm:px-2 inline-block text-sm tracking-tight xl:text-base 2xl:text-lg"
              >
                blog
              </a>
            </li>
            <li>
              <a
                href=""
                className="capitalize text-secondary-text-white py-2 sm:px-2 inline-block text-sm tracking-tight xl:text-base 2xl:text-lg"
              >
                planes
              </a>
            </li>
          </ul>
        </nav>
        <span className="copy text-secondary-text-white uppercase text-xs mx-auto pb-2 md:col-span-2 lg:col-span-3">
          {" "}
          &copy; align 2025.
        </span>
      </div>
    </footer>
  );
}

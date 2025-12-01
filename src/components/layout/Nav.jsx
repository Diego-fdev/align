import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-10 text-white px-4 md:px-8 lg:px-12 py-6 grid grid-cols-2 sm:grid-cols-3">
      <div
        onClick={handleToggle}
        className={`main-menu flex gap-2 items-center relative justify-between px-5 py-3 bg-main-white/20  rounded-t-3xl transition-[border-radius] duration-400 ${
          toggle
            ? "w-[170px] lg:w-[200px] rounded-b-none delay-0"
            : "w-fit rounded-b-3xl"
        }`}
      >
        <span className="capitalize tracking-tight font-light text-sm lg:text-base">
          menu
        </span>
        <div className="menu-icon flex items-center relative ">
          <EllipsisVertical className="w-4 h-4" />
          <EllipsisVertical className="w-4 h-4 right-1 absolute" />
        </div>
        <div
          className={`dropdown absolute top-11 lg:top-12 left-0 px-5 w-[170px] lg:w-[200px] bg-main-white/20 rounded-b-3xl pb-3 pt-1 backdrop-blur-sm transition-transform origin-top-left duration-200 ${
            toggle ? "scale-100 delay-0" : "scale-0 delay-0"
          }`}
        >
          <ul className="flex flex-col gap-3">
            <li>
              <span className="capitalize tracking-tight text-sm lg:text-base font-light">
                entrenadores
              </span>
            </li>
            <li>
              <span className="capitalize tracking-tight text-sm lg:text-base font-light">
                servicios
              </span>
            </li>
            <li>
              <span className="capitalize tracking-tight text-sm lg:text-base font-light">
                blog
              </span>
            </li>
            <li>
              <span className="capitalize tracking-tight text-sm lg:text-base font-light">
                planes
              </span>
            </li>
            <li>
              <span className="capitalize tracking-tight text-sm lg:text-base font-light">
                contacto
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="logo flex items-center gap-2 justify-self-end sm:justify-self-center">
        <div className="img-logo w-5 h-5 lg:h-7 lg:w-7 xl:h-8 xl:w-8">
          <img src="/src/assets/logo.webp" alt="" />
        </div>
        <span className="capitalize tracking-tighter font-light text-2xl lg:text-3xl xl:text-4xl">
          align
        </span>
      </div>
      <div className="btn-login hidden sm:flex sm:items-center bg-main-white text-main-black rounded-full py-2 px-8 w-fit justify-self-end ">
        <span className="capitalize font-semibold tracking-tight text-sm lg:text-base">
          unirse
        </span>
      </div>
    </header>
  );
}

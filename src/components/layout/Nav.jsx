import { EllipsisVertical } from "lucide-react";
import { navigationLinks } from "../../constants/navigation";
import { Link } from "react-router";
import { useToggleMenu } from "../../hooks/useToggle";

export default function Nav() {
  const { toggle, handleToggle, ref } = useToggleMenu(false);

  return (
    <header className="absolute top-0 left-0 w-full z-10 text-main-white px-4 md:px-8 lg:px-12 py-6 grid grid-cols-2 sm:grid-cols-3">
      <div className="contenedor-menu relative h-11 w-fit">
        <div
          ref={ref}
          onClick={handleToggle}
          className={`main-menu absolute top-0 left-0 flex flex-col h-11 px-4 bg-secondary-white/40 rounded-3xl transition-[width,height] duration-400 backdrop-blur-sm ${
            toggle
              ? "w-[170px] lg:w-[200px] h-58 lg:h-64 delay-0"
              : "w-[100px] h-11"
          }`}
        >
          <div className="btn-menu flex justify-between items-center h-11 w-full">
            <span className="capitalize tracking-tight text-sm lg:text-base text-main-white">
              menu
            </span>
            <div className="menu-icon flex items-center relative ">
              <EllipsisVertical className="w-4 h-4" />
              <EllipsisVertical className="w-4 h-4 right-1 absolute" />
            </div>
          </div>

          <ul className="absolute top-11 lg:top-14 left-0 px-4 flex flex-col gap-3 lg:gap-4 w-full">
            {navigationLinks.map((link) => (
              <li
                key={link.id}
                className={`transition-transform origin-top-left cursor-pointer ${
                  toggle ? "scale-100 opacity-100" : "scale-0 opacity-0 delay-0"
                }`}
                style={{
                  transitionDelay: toggle ? `${link.id * 100}ms` : "0ms",
                }}
              >
                <Link
                  to={link.path}
                  className="capitalize tracking-tight text-sm lg:text-base font-light text-main-white/80 hover:text-main-white transition-color"
                >
                  {link.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="logo flex items-center gap-2 justify-self-end sm:justify-self-center">
        <div className="img-logo w-5 h-5 lg:h-7 lg:w-7 xl:h-8 xl:w-8">
          <img src="/src/assets/logo.webp" alt="" />
        </div>
        <span className="capitalize tracking-tighter font-light text-2xl lg:text-3xl xl:text-4xl text-main-white">
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

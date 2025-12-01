import MainIcon from "../../../../icons/MainIcon";

export default function CardServicios({ id, type, icon, title, text }) {
  return (
    <div
      id={id}
      className={`card p-6 2xl:p-7 flex flex-col gap-8 xl:min-h-[410px] 2xl:min-h-[475px] rounded-3xl relative w-full ${
        type === "main" ? "bg-main-black md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="ilustracion-card absolute -top-20 sm:top-auto sm:-bottom-20 -right-20 xl:-bottom-28 xl:-right-28 opacity-50 overflow-hidden pointer-events-none">
        <MainIcon
          customSize={"w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"}
        />
      </div>
      <div
        className={`icon rounded-full w-14 h-14 xl:w-15 xl:h-15 2xl:w-16 2xl:h-16 flex items-center justify-center ${
          type === "main" ? "bg-main-color" : "bg-main-black"
        }`}
      >
        {icon}
      </div>
      <div className="card-text flex flex-col gap-2">
        <span
          className={`capitalize text-[22px] xl:text-2xl 2xl:text-[28px] tracking-tight ${
            type === "main" ? "text-main-white" : "text-main-black"
          }`}
        >
          {title}
        </span>
        <p
          className={`text-sm leading-[22px] xl:text-base xl:leading-6 2xl:text-[18px] tracking-tight 2xl:leading-[30px] ${
            type === "main"
              ? "text-secondary-text-white"
              : "text-secondary-text"
          }`}
        >
          {text}
        </p>
      </div>

      <a
        href=""
        className={`w-full py-3 rounded-full sm:w-fit mt-auto sm:px-8 flex items-center justify-center ${
          type === "main" ? "bg-main-white " : "bg-main-black"
        }`}
      >
        <span
          className={`capitalize text-sm xl:text-base 2xl:text-lg font-medium ${
            type === "main" ? "text-main-black" : "text-white"
          }`}
        >
          saber mas
        </span>
      </a>
    </div>
  );
}

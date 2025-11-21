import MainIcon from "../../icons/MainIcon";

export default function MainCard({
  type,
  title,
  text,
  icon,
  customButtonStyles,
  customTitleStyles,
  customCardStyles,
}) {
  return (
    <div
      className={`card p-6 2xl:p-7 flex flex-col gap-8 xl:min-h-[410px] 2xl:min-h-[475px] rounded-3xl relative w-full overflow-hidden ${
        type === "main" && "bg-main-black md:col-span-2 lg:col-span-1"
      } ${type === "team" && "bg-main-color"} ${customCardStyles}`}
    >
      <div
        className={`ilustracion-card absolute -top-20 sm:top-auto sm:-bottom-20 -right-20  overflow-hidden pointer-events-none xl:-bottom-28 xl:-right-28 ${
          type === "team" ? "opacity-80" : "opacity-20"
        }`}
      >
        <MainIcon
          customSize={`w-[200px] h-[200px]  ${
            type === "team"
              ? "lg:w-[220px] lg:h-[220px] xl:w-[300px] xl:h-[300px]"
              : "lg:w-[300px] lg:h-[300px] "
          }`}
        />
      </div>
      {type !== "team" && (
        <div
          className={`icon rounded-full w-14 h-14 xl:w-15 xl:h-15 2xl:w-16 2xl:h-16 flex items-center justify-center ${
            type === "main" ? "bg-main-color" : "bg-main-black"
          }`}
        >
          {icon}
        </div>
      )}

      <div className="card-text flex flex-col gap-2 relative">
        <span
          className={`capitalize text-[22px] xl:text-2xl 2xl:text-[28px] tracking-tight   ${
            type === "main" ? "text-main-white" : "text-main-black"
          } ${
            type === "team" && "text-3xl mb-2 xl:text-4xl 2xl:text-[40px]!"
          } ${customTitleStyles}`}
        >
          {title}
        </span>
        <p
          className={`text-sm leading-[22px] xl:text-base xl:leading-6 2xl:text-[18px] tracking-tight 2xl:leading-[30px] max-w-[550px] ${
            type === "main"
              ? "text-secondary-text-white"
              : "text-secondary-text"
          } ${type === "team" && "2xl:text-lg"}`}
        >
          {text}
        </p>
      </div>

      <a
        href=""
        className={`w-full py-3 rounded-full sm:w-fit mt-auto sm:px-8 flex items-center justify-center relative ${
          type === "main" ? "bg-main-white " : "bg-main-black"
        } ${customButtonStyles}`}
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

export default function CardPlan({
  nombrePlan,
  costo,
  listadoBeneficios,
  customCardStyles,
}) {
  return (
    <div
      className={`card-plan flex flex-col gap-8 lg:gap-10 2xl:gap-12 px-4 lg:px-6 xl:p-8 py-6 rounded-2xl ${
        nombrePlan === "plan basico"
          ? "bg-main-black md:col-span-2 md:flex-row lg:flex-col lg:col-span-1"
          : "bg-main-white"
      } ${customCardStyles}`}
    >
      <div
        className={`upper-info flex flex-col gap-8 xl:gap-10 2xl:gap-12 ${
          nombrePlan === "plan basico" && "md:flex-1"
        }`}
      >
        <header className="flex flex-col gap-4 items-center">
          <span
            className={`uppercase font-medium tracking-wide text-inherit 2xl:text-lg ${
              nombrePlan === "plan basico" && "text-main-white"
            }`}
          >
            {nombrePlan}
          </span>
          <span
            className={`text-5xl lg:text-[54px] xl:text-6xl 2xl:text-[67px] ${
              nombrePlan === "plan basico" && "text-main-white"
            }`}
          >
            ${costo}
          </span>
          <span
            className={`text-sm xl:text-sm font-medium 2xl:text-lg ${
              nombrePlan === "plan basico" && "text-secondary-text-white"
            }`}
          >
            por usuario, por mes
          </span>
        </header>
        <button
          className={`w-full py-3 rounded-full  ${
            nombrePlan === "plan basico"
              ? "bg-main-white text-secondary-black"
              : "bg-main-black text-main-white"
          }`}
        >
          <span className="capitalize text-inherit text-sm lg:text-base 2xl:text-lg">
            {nombrePlan === "plan basico"
              ? "empezar prueba de 15 días"
              : "contacto"}
          </span>
        </button>
      </div>
      <ul
        className={`text-center flex flex-col gap-1 lg:gap-3 2xl:gap-6 ${
          nombrePlan === "plan basico" &&
          "md:flex-1 md:justify-evenly lg:justify-start"
        }`}
      >
        {listadoBeneficios.map((beneficio, i) => (
          <li key={i}>
            <span
              className={`text-xs xl:text-sm 2xl:text-base font-medium capitalize ${
                nombrePlan === "plan basico" && "text-secondary-text-white"
              }`}
            >
              {beneficio}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

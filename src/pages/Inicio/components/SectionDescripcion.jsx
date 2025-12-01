import CustomMainSection from "../../../components/CustomMainSection";

export default function SectionDescripcion() {
  return (
    <CustomMainSection customStyles="grid gap-y-12 md:grid-rows-[repeat(3,auto)] lg:grid-rows-[auto_200px_auto] 2xl:grid-rows-[auto_250px_auto] lg:grid-cols-[repeat(3,1fr)] lg:gap-y-16">
      <div className="texto lg:col-span-2">
        <p className="text-4xl sm:text-5xl tracking-tight sm:max-w-[720px] mx-auto lg:mx-0 text-center leading-12 lg:text-left lg:text-[42px] lg:max-w-[650px] lg:pt-12 xl:text-5xl xl:max-w-[700px] 2xl:text-6xl 2xl:max-w-[850px] 2xl:leading-16">
          Descubre el poder transformador del yoga, tanto si eres principiante
          como si tienes experiencia.
        </p>
      </div>
      <ul className="info grid gap-8 items-center sm:grid-cols-3 sm:row-start-3 lg:col-start-2 lg:col-span-2 lg:pt-0 lg:ml-auto lg:min-w-[550px] lg:w-[90%] xl:w-[80%] 2xl:w-[800px]">
        <li className="flex flex-col items-center sm:self-start sm:justify-self-end lg:justify-self-start lg:items-start lg:self-end">
          <span className="text-5xl lg:text-6xl 2xl:text-7xl">
            1k
            <span className="text-2xl">+</span>
          </span>
          <span className="capitalize text-sm tracking-tight font-light 2xl:text-base">
            alumnos
          </span>
        </li>
        <li className="flex flex-col items-center sm:pt-20 lg:pt-0 lg:self-end lg:justify-self-start lg:items-start">
          <span className="text-5xl lg:text-6xl 2xl:text-7xl ">
            98
            <span className="text-2xl">%</span>
          </span>
          <span className="capitalize text-sm tracking-tight font-light 2xl:text-base">
            calificaciones positivas
          </span>
        </li>
        <li className="flex flex-col items-center sm:self-start sm:justify-self-start lg:items-start lg:self-end">
          <span className="text-5xl lg:text-6xl 2xl:text-7xl ">
            4.5
            <span className="text-2xl">h</span>
          </span>
          <span className="capitalize text-sm tracking-tight font-light 2xl:text-base">
            horas promedio
          </span>
        </li>
      </ul>
      <div className="imagen-persona-1 w-full max-w-[400px] sm:max-w-fit mx-auto rounded-xl overflow-hidden md:h-[50vw] lg:row-span-2 lg:h-[40vw] xl:h-[35vw] 2xl:h-[500px] lg:justify-self-end lg:mx-0">
        <img src="/src/assets/instructora-1.webp" alt="" />
      </div>
      <div className="imagen-persona-2 hidden lg:inline-block w-fit rounded-xl overflow-hidden h-[200px] 2xl:h-[250px] col-start-2 justify-self-center">
        <img src="/src/assets/instructora-2.webp" alt="" />
      </div>
      <div className="imagen-persona-3 hidden lg:inline-block w-fit rounded-xl overflow-hidden h-[40vw] xl:h-[35vw] 2xl:h-[500px] row-span-2 col-start-1 row-start-2 mt-20 justify-self-start">
        <img src="/src/assets/instructora-3.webp" alt="" />
      </div>
    </CustomMainSection>
  );
}

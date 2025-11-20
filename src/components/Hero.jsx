export default function Hero() {
  return (
    <section className="w-full px-4 bg- h-screen min-h-[700px] bg-linear-150 from-secondary-color to-secondary-white via-secondary-color ">
      <div className="main-content-hero pt-48 lg:pt-72 flex flex-col gap-4">
        <h1 className="text-main-white text-6xl lg:text-7xl xl:text-8xl xl:leading-20 leading-14 lg:leading-16 text-center tracking-tight max-w-[350px] sm:max-w-[550px] xl:max-w-[700px] mx-auto">
          Encuentra tu balance con Align
        </h1>
        <p className="text-sm  text-main-white text-center max-w-[450px] mx-auto xl:text-base">
          Únete a nosotros para transformar cuerpo y mente a través de nuestros
          programas de yoga y fitness.
        </p>
      </div>
    </section>
  );
}

import CardPlan from "../../../components/cards/CardPlan";
import CustomMainSection from "../../../components/CustomMainSection";

const listadoPlanes = [
  {
    id: 1,
    nombre: "plan inicial",
    costo: 14,
    beneficios: [
      "8 clases de yoga por mes",
      "2 sesiones de entrenamiento por mes",
      "acceso a recursos online",
      "boletín mensual de bienestar",
    ],
  },
  {
    id: 2,
    nombre: "plan basico",
    costo: 29,
    beneficios: [
      "clases de yoga ilimitadas",
      "4 sesiones de entrenamiento por mes",
      "1 sesión de coaching personalizado por mes",
      "acceso a recursos online",
      "boletín mensual de bienestar",
    ],
  },
  {
    id: 3,
    nombre: "plan premium",
    costo: 139,
    beneficios: [
      "4 sesión de coaching personalizado por mes",
      "sesiones personalizadas de yoga y fitness",
      "acceso a recursos online",
      "boletín mensual de bienestar",
    ],
  },
];

export default function SectionPlanes() {
  return (
    <CustomMainSection customStyles="flex flex-col gap-12">
      <header className="w-full flex flex-col items-center gap-4">
        <h2 className="text-4xl tracking-tight text-center max-w-[400px] sm:max-w-[500px] mx-auto sm:text-5xl md:text-[54px] md:max-w-[600px] xl:max-w-[700px] xl:text-6xl 2xl:text-[67px]">
          Clases de entrenamiento comunitaria
        </h2>
        <p className="text-sm tracking-tight text-center max-w-[500px] xl:max-w-[600px] xl:text-base 2xl:text-lg 2xl:max-w-[650px]">
          Si buscas complementar tu rutina de ejercicios con entrenamiento en
          grupos pequeños o simplemente quieres unirte a algunas clases al mes,
          echa un vistazo a nuestras opciones de pases de clases.
        </p>
      </header>
      <div className="main-content-planes grid gap-8 max-w-[500px] mx-auto w-full md:grid-cols-2 md:max-w-full lg:grid-cols-3 lg:gap-4">
        {listadoPlanes.map((plan) => (
          <CardPlan
            key={plan.id}
            nombrePlan={plan.nombre}
            costo={plan.costo}
            listadoBeneficios={plan.beneficios}
            customCardStyles={
              plan.id === 3 && "md:col-start-2 md:row-start-1 lg:col-start-3"
            }
          />
        ))}
      </div>
    </CustomMainSection>
  );
}

import CustomMainSection from "../../CustomMainSection";
import DropdownPregunta from "./DropdownPregunta";

const infoPreguntas = [
  {
    id: 1,
    pregunta: "Qué tipos de clases de yoga ofrecen?",
    respuesta:
      "Ofrecemos una variedad de estilos de yoga, incluidos Hatha, Vinyasa y Yin Yoga, adecuados para todos los niveles.",
  },
  {
    id: 2,
    pregunta:
      "Necesito alguna experiencia previa para unirme a su programa de fitness?",
    respuesta:
      "Ofrecemos una variedad de estilos de yoga, incluidos Hatha, Vinyasa y Yin Yoga, adecuados para todos los niveles.",
  },
  {
    id: 3,
    pregunta: "Cómo reservo una clase de yoga personalizada?",
    respuesta:
      "Ofrecemos una variedad de estilos de yoga, incluidos Hatha, Vinyasa y Yin Yoga, adecuados para todos los niveles.",
  },
  {
    id: 4,
    pregunta: "Qué debo llevar a una clase de yoga?",
    respuesta:
      "Ofrecemos una variedad de estilos de yoga, incluidos Hatha, Vinyasa y Yin Yoga, adecuados para todos los niveles.",
  },
  {
    id: 5,
    pregunta:
      "Sus planes nutricionales están adaptados a las necesidades individuales?",
    respuesta:
      "Ofrecemos una variedad de estilos de yoga, incluidos Hatha, Vinyasa y Yin Yoga, adecuados para todos los niveles.",
  },
  {
    id: 6,
    pregunta: "Cuánto duran los talleres de bienestar?",
    respuesta:
      "Ofrecemos una variedad de estilos de yoga, incluidos Hatha, Vinyasa y Yin Yoga, adecuados para todos los niveles.",
  },
];

export default function SectionPreguntas() {
  return (
    <CustomMainSection
      customStyles={
        "grid gap-12 lg:grid-cols-[250px_1fr] xl:grid-cols-[350px_1fr]"
      }
    >
      <header className="w-full flex flex-col items-center gap-4">
        <h2 className="text-4xl tracking-tight text-center lg:text-left max-w-[400px] sm:max-w-[500px] mx-auto sm:text-5xl md:text-[54px] md:max-w-[600px] lg:text-5xl xl:max-w-[700px] xl:text-6xl">
          Preguntas frecuentes
        </h2>
        <p className="text-sm tracking-tight text-center max-w-[500px] xl:max-w-[600px] xl:text-base 2xl:text-lg 2xl:max-w-[650px] lg:text-left">
          Todo lo que necesitas saber sobre el producto y facturación.
        </p>
      </header>
      <ul className="preguntas-main-content flex flex-col gap-4">
        {infoPreguntas.map((info) => (
          <DropdownPregunta
            key={info.id}
            pregunta={info.pregunta}
            respuesta={info.respuesta}
          />
        ))}
      </ul>
    </CustomMainSection>
  );
}

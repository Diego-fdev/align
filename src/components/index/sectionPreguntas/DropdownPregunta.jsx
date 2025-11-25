import { ChevronUp } from "lucide-react";
import { useState } from "react";

export default function DropdownPregunta({ pregunta, respuesta }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <li className="p-4 py-6 lg:p-6 2xl:p-8 flex flex-col gap-2 w-full transition-all h-fit">
      <div className="flex justify-between gap-4" onClick={handleToggle}>
        <p className="text-xl sm:text-2xl md:text-xl xl:text-2xl 2xl:text-[28px] text-main-black">
          {pregunta}
        </p>
        <div className="icon-container rounded-full min-w-12 md:min-w-14 w-12 h-12 md:h-14 md:w-14 xl:h-16 xl:w-16 xl:min-w-16 bg-black flex items-center justify-center">
          <ChevronUp
            className={`stroke-main-white w-4 h-4 md:h-5 md:w-5 xl:w-6 xl:h-6 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>
      <p
        className={`tracking-tight overflow-hidden text-sm sm:text-base sm:max-w-[400px] max-w-[350px] transition-[height] md:text-sm md:max-w-[500px] 2xl:text-lg lg:max-w-[500px] xl:text-base xl:max-w-[500px] ${
          isOpen ? "h-[66px] md:h-[45px] 2xl:h-[55px]" : "h-0"
        }`}
      >
        {respuesta}
      </p>
    </li>
  );
}

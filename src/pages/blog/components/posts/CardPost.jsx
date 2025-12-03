import React from "react";

export default function CardPost({ imagen, tag, titulo, fecha }) {
  return (
    <div className="card blog bg-secondary-white/20 p-4 rounded-2xl flex flex-col gap-4">
      <div className="imagen rounded-2xl overflow-hidden h-[55vw] sm:h-[30vw] lg:h-[18vw] xl:h-[280px]">
        <img src={imagen} alt="" />
      </div>
      <div className="info flex flex-col gap-2 sm:gap-4 md:p-2 flex-1">
        <span className="tag capitalize tracking-tight text-secondary-color font-medium text-sm xl:text-base 2xl:text-lg">
          {tag}
        </span>
        <h3 className="capitalize text-xl xl:text-2xl 2xl:text-[26px] tracking-tight">
          {titulo}
        </h3>
        <span className="capitalize text-sm xl:text-base 2xl:text-lg tracking-tight self-end pt-2 sm:pt-4 mt-auto text-secondary-color justify-self-end">
          {fecha}
        </span>
      </div>
    </div>
  );
}

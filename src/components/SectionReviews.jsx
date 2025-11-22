import CustomMainSection from "./CustomMainSection";
import imagenUserReviewUno from "../assets/reviews/user-review-1.webp";
import imagenUserReviewDos from "../assets/reviews/user-review-2.webp";
import imagenUserReviewTres from "../assets/reviews/user-review-3.webp";
import imagenUserReviewCuatro from "../assets/reviews/user-review-4.webp";

const infoReviews = [
  {
    id: 1,
    nombre: "clare bamford",
    username: "staking",
    imagenSrc: imagenUserReviewUno,
    review:
      "Hermano, no tengo palabras para agradecerte, aunque digas que todo el mérito es mío",
    fecha: "22.03.2025",
  },
  {
    id: 2,
    nombre: "jamie kokot",
    username: "jamie22",
    imagenSrc: imagenUserReviewDos,
    review: "Empecé a ir al gym pero no tenía idea de lo que estaba haciendo",
    fecha: "17.07.2025",
  },
  {
    id: 3,
    nombre: "clare bamford",
    username: "staking",
    imagenSrc: imagenUserReviewTres,
    review:
      "Hermano, no tengo palabras para agradecerte, aunque digas que todo el mérito es mío",
    fecha: "11.02.2025",
  },
  {
    id: 4,
    nombre: "clare bamford",
    username: "staking",
    imagenSrc: imagenUserReviewCuatro,
    review: "Empecé a ir al gym pero no tenía idea de lo que estaba haciendo",
    fecha: "01.01.2025",
  },
];

export default function SectionReviews() {
  return (
    <CustomMainSection customStyles="flex flex-col gap-12">
      <header className="w-full flex items-center flex-col">
        <h2 className="capitalize text-4xl sm:text-5xl md:text-6xl text-center tracking-tight max-w-[400px] sm:max-w-[500px] md:max-w-[600px] mx-auto">
          mas de 200+ reviews de nuestros clientes
        </h2>
      </header>
      <div className="contenido-reviews grid sm:grid-cols-2 gap-8 sm:gap-4 lg:grid-cols-4">
        {infoReviews.map((review) => (
          <div
            key={review.id}
            className="card-review p-4 flex flex-col gap-6 max-w-[450px] mx-auto sm:max-w-full sm:mx-0"
          >
            <header className="flex gap-2">
              <div className="imagen-usuario w-10 h-10 rounded-full overflow-hidden">
                <img src={review.imagenSrc} alt="" />
              </div>
              <div className="info-usuario flex flex-col h-10 justify-center gap-1">
                <span className="text-sm xl:text-base font-bold capitalize tracking-tight">
                  {review.nombre}
                </span>
                <span className="text-xs xl:text-sm text-secondary-text-white">
                  @{review.username}
                </span>
              </div>
            </header>
            <p className="review font-medium tracking-tight xl:text-lg">
              “{review.review}”
            </p>
            <span className="fecha block self-end text-sm xl:text-base text-secondary-text-white">
              {review.fecha}
            </span>
          </div>
        ))}
      </div>
    </CustomMainSection>
  );
}

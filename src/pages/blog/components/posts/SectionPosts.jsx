import imagenBlogUno from "../../../../assets/blog/imagen-blog-1.webp";
import imagenBlogDos from "../../../../assets/blog/imagen-blog-2.webp";
import imagenBlogTres from "../../../../assets/blog/imagen-blog-3.webp";
import imagenBlogCuatro from "../../../../assets/blog/imagen-blog-4.webp";
import imagenBlogCinco from "../../../../assets/blog/imagen-blog-5.webp";
import imagenBlogSeis from "../../../../assets/blog/imagen-blog-6.webp";
import CardPost from "./CardPost";

const infoBlog = [
  {
    id: 1,
    imagen: imagenBlogUno,
    tag: "fitness",
    titulo: "entrenamiento de fuerza de cuerpo completo: programa semanal",
    fecha: "14 de mayo, 2025",
  },
  {
    id: 2,
    imagen: imagenBlogDos,
    tag: "bienestar",
    titulo: "yoga restaurativo para aliviar el estrés",
    fecha: "29 de abril, 2025",
  },
  {
    id: 3,
    imagen: imagenBlogTres,
    tag: "fitness",
    titulo:
      "entrenamientos de 10 minutos para ponerse en forma: entrenamientos rápidos",
    fecha: "04 de julio, 2025",
  },
  {
    id: 4,
    imagen: imagenBlogCuatro,
    tag: "bienestar",
    titulo: "Rutina matutina: empieza tu día con bienestar",
    fecha: "30 de julio, 2025",
  },
  {
    id: 5,
    imagen: imagenBlogCinco,
    tag: "sesión de yoga",
    titulo: "Serie de rutinas de yoga de 7 días para este año",
    fecha: "10 de agosto, 2025",
  },
  {
    id: 6,
    imagen: imagenBlogSeis,
    tag: "sesión de yoga",
    titulo: "Serie de desafíos de 5 días para entrenadores",
    fecha: "27 de septiembre, 2025",
  },
];

export default function SectionPosts() {
  return (
    <div className="main-content grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {infoBlog.map((post) => (
        <CardPost
          key={post.id}
          tag={post.tag}
          imagen={post.imagen}
          titulo={post.titulo}
          fecha={post.fecha}
        />
      ))}
    </div>
  );
}

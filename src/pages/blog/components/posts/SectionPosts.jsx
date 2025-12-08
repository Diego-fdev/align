import { infoBlog } from "../../../../constants/blog";
import CardPost from "./CardPost";

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

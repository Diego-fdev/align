import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "../pages/Inicio/Inicio";
import MainLayout from "../layouts/MainLayout";
import Tutoras from "../pages/tutoras/Tutoras";
import Contacto from "../pages/contacto/Contacto";
import Planes from "../pages/planes/Planes";
import Blog from "../pages/blog/Blog";
import Servicios from "../pages/servicios/Servicios";
import SupportLayout from "../layouts/SupportLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route element={<SupportLayout />}>
            <Route path="/tutoras" element={<Tutoras />} />
            <Route path="/planes" element={<Planes />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/servicios" element={<Servicios />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

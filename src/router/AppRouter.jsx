import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "../pages/Inicio/Inicio";
import MainLayout from "../layouts/MainLayout";
import Tutoras from "../pages/tutoras/Tutoras";
import Contacto from "../pages/contacto/Contacto";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/tutoras" element={<Tutoras />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

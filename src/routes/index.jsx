import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Carrito from "../components/Carrito";
import DinamicPage from "../components/DinamicPage";
import PageDos from "../components/PageDos";
import PageTres from "../components/PageTres";
import PageUno from "../components/PageUno";
import WithNavbar from "./layout/WithNavbar";
// import Error404 from "../components/Error404";
const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WithNavbar/>}>
            <Route index element={<PageUno />} />
            <Route path="page-dos" element={<PageDos />} />
            <Route path="page-tres" element={<PageTres />} />
            <Route path="/dinamic-page/:id" element={<DinamicPage/>} />
        </Route>
        <Route path='/carrito' element={<Carrito />} / >
        <Route path="*" element={<Navigate to='/'/>} />
        {/* <Route path="*" element={<Error404/>} /> */}
      </Routes>
    </Router>
  );
};

export default Rutas;

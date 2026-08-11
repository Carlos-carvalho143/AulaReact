import{BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import SaoPaulo from "./paginas/SaoPaulo";
import MinasGerais from "./paginas/MinasGerais";
import RioJaneiro from "./paginas/RioJaneiro";
import EspiritoSanto from "./paginas/EspiritoSanto";
import SantaCatarina from "./paginas/SantaCatarina";
import Parana from "./paginas/Parana";
import RioGrandeS from "./paginas/RioGrandeS";
import MatoGrosso from "./paginas/MatoGrosso";
import DistritoFederal from "./paginas/DistritoFederal";
import MatoGrossoS from "./paginas/MatoGrossoS";
import Goias from "./paginas/Goias";
    export default function App () {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}  />

      <Route path="/estados/sp" element={<SaoPaulo />} />
      <Route path="/estados/mg" element={<MinasGerais />} />
 <Route path="/estados/rj" element={<RioJaneiro />} />
  <Route path="/estados/es" element={<EspiritoSanto />} />
  <Route path="/estados/sc" element={<SantaCatarina />} />
  <Route path="/estados/pr" element={<Parana />} />
  <Route path="/estados/rs" element={<RioGrandeS />} />
  <Route path="/estados/ms" element={<MatoGrossoS />} />
  <Route path="/estados/mt" element={<MatoGrosso />} />
  <Route path="/estados/df" element={<DistritoFederal />} />
  <Route path="/estados/go" element={<Goias />} />

      </Routes>
</BrowserRouter>
  )
};
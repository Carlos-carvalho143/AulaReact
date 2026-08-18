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
import Acre from "./paginas/Acre";
import Alagoas from "./paginas/Alagoas";
import Amapa from "./paginas/Amapa";
import Amazonas from "./paginas/Amazonas";
import Bahia from "./paginas/Bahia";
import Ceara from "./paginas/Ceara";
import Maranhao from "./paginas/Maranhao";
import Para from "./paginas/Para";
import Paraiba from "./paginas/Paraiba";
import Pernambuco from "./paginas/Pernambuco";
import Piaui from "./paginas/Piaui";
import RioGrandeN from "./paginas/RioGrandeN";
import Rondonia from "./paginas/Rondonia";
import Roraima from "./paginas/Roraima";
import Sergipe from "./paginas/Sergipe";
import Tocatins from "./paginas/Tocantins";
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
  <Route path="/estados/ac" element={<Acre />} />
  <Route path="/estados/al" element={<Alagoas />} />
  <Route path="/estados/ap" element={<Amapa />} />
  <Route path="/estados/am" element={<Amazonas />} />
  <Route path="/estados/ba" element={<Bahia />} />
  <Route path="/estados/ce" element={<Ceara />} />
  <Route path="/estados/ma" element={<Maranhao />} />
  <Route path="/estados/pa" element={<Para />} />
  <Route path="/estados/pb" element={<Paraiba />} />
  <Route path="/estados/pe" element={<Pernambuco />} />
  <Route path="/estados/pi" element={<Piaui />} />
  <Route path="/estados/rn" element={<RioGrandeN />} />
  <Route path="/estados/ro" element={<Rondonia />} />
  <Route path="/estados/rr" element={<Roraima />} />
  <Route path="/estados/se" element={<Sergipe />} />
  <Route path="/estados/to" element={<Tocatins />} />
      </Routes>
</BrowserRouter>
  )
};
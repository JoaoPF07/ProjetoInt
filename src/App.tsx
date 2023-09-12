import "./style/estilo.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/notfound";
import LoginEntidade from "./pages/loginentidade";
import Cadastros from "./pages/cadastro";
import PaginaInicial from "./pages/paginainicial";
import AreaEntidade from "./pages/areaentidade";
import Entidade from "./pages/entidades";
import DetalhamentoEntidade from "./pages/detalhamentoentidade";
import { UsuarioLogadoProvider } from "./componentes/contexts/contextAuth";

function App() {
  return (
    <div>
      <div>
        <UsuarioLogadoProvider>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/areadaentidade" element={<AreaEntidade />} />
          <Route path="/login-entidade" element={<LoginEntidade />} />
          <Route path="/cadastros" element={<Cadastros />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/entidades" element= {<Entidade/>}/>
          <Route path="/perfil-entidade/ID/:ID" element= {<DetalhamentoEntidade />}/>
        </Routes>
        </UsuarioLogadoProvider>
      </div>
    </div>
  );
}

export default App;

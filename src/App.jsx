//css do projeto
import "./App.css";

//importação das paginas
import Login from "./pages/Login";
import Home from "./pages/Home";

//importação da config das rotas
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* aqui no app é onde são chamados todas as demais tela geralmente são configuradas as rotas  */}

      {/* instalei a lib  react-router-dom
      npm install react-router-dom */}

      {/* exemplo de tela de login de sem o uso de hooks
      mais proximo do html css e js que existe hoje no projeto */}

      <Router>
        <Routes>
          {/* Define a rota para a página de login */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/estaticos/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import ListaTema from './components/temas/listaTema/ListaTema';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';

function App() {
    const [count, setCount] = useState(0);

    return (
            <BrowserRouter>
                <Navbar />
                <div style={{minHeight:'100vh'}}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/cadastro" element={<CadastroUsuario />} />
                        <Route path="/postagens" element={<ListaPostagem />} />
                        <Route path="/temas" element={<ListaTema />} />
                        <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />
                    </Routes>
                </div>

                <Footer />
            </BrowserRouter>
    );
}

export default App;

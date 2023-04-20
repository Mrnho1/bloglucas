import { useState } from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './pages/Home/Home';
import ResponsiveAppBar from './components/estaticos/responsivo/ResponsiveAppBar';
import Footer from './components/estaticos/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import ListaTema from './components/temas/listaTema/ListaTema';

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
                    </Routes>
                </div>

                <Footer />
            </BrowserRouter>
    );
}

export default App;

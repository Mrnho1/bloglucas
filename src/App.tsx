import { useState } from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './pages/Home/Home';
import ResponsiveAppBar from './components/estaticos/responsivo/ResponsiveAppBar';
import Footer from './components/estaticos/footer/Footer';




function App() {
    const [count, setCount] = useState(0);

    return (
        <>
        {/* <ResponsiveAppBar/> */}
        <Navbar/>
        <Home/>
        <Footer/>
        </>
    );
}

export default App;

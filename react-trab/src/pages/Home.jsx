import { useState } from 'react';
import './Home.css';
import Listagem from '../components/Listagem.jsx';

const Home = () => {
    const [aux, setAux] = useState([]);

    return (
        <div className="home-container">
            <Listagem/>
        </div>
    );
}

export default Home;

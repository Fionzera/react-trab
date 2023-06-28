import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Listagem() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    // Função assíncrona para obter os dados da API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.exemplo.com/dados'); // Substitua pela URL real da API
        setItens(response.data);
      } catch (error) {
        console.error('Ocorreu um erro na requisição:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {itens.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Listagem;

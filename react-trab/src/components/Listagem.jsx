import { useEffect, useState } from 'react';
import './Listagem.css'
import axios from 'axios';

const Listagem = () => {
  const [anime, setAnime] = useState([]);
  const [animeID, setAnimeID] = useState([]);

  const getAnime = async () =>{
    try{
			const response = await axios.get("https://api.jikan.moe/v4/anime");
      const {data} = response.data;
      setAnime(data);
      console.log(anime.mal_id);
			} catch(error){
				console.log(error);
			} finally{
				
			}
  }

  const getAnimeByID = async (id) =>{
    try{
      const response = await axios.get('https://api.jikan.moe/v4/anime/1');
      console.log(response.title);
    }catch(error){
      console.log(error);
    }
  }

  const onClickAnime = (id) =>{
    console.log(id);
    setAnimeID(id);
    getAnimeByID(id);
  }

  useEffect(() =>{
    getAnime();
  },[]);

  return (
    <div className="container">
      <h1>Animes:</h1>
      {anime.length === 0 ? (<p>Carregando...</p>) : (
        anime.map((anime) => (
          <div className='anime' key={anime.mal_id} onClick={() => onClickAnime(anime.mal_id)}>
            <h2>{anime.title}</h2>
          </div>
        ))
      ) }
    </div>
  );
}

export default Listagem;

import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'
import './home.css';

//URL DA API: /movie/now_playing?api_key=fcd6af69e5e5441ef82f1bd8da8b9bf9&language=pt-BR

function Home(){
const [filmes, setFilmes] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(()=>{

    async function loadFilmes(){
     const response = await api.get("movie/now_playing", {
        params:{
            api_key: "fcd6af69e5e5441ef82f1bd8da8b9bf9",
            language: "pt-BR",
            page: 1,

        }
     })
    // console.log(response.data.results.slice(0, 10));
    setFilmes(response.data.results.slice(0, 12));
    setLoading(false);
    }
    loadFilmes();
},[])

if(loading){
    return(
      <div className='loading'>
        <h2>Carregando filmes...</h2>
      </div>  
    )
}

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}


export default Home;

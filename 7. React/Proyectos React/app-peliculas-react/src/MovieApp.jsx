import { useState } from 'react';
import './MovieApp.css';

export const MovieApp = () => {

    const [search, setSearch] = useState('');
    const [movieList, setMovieList] = useState([]);

    const urlBase = 'https://api.themoviedb.org/3/search/movie';
    const API_KEY = '94999799fb05fb8deb802fb15fbcb7b2';

    const handleInputChange = ({ target }) => {
        setSearch(target.value);
        console.log(target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        fetchMovies();
    }

    const fetchMovies = async () => {
        try {
            const response = await fetch(`${urlBase}?query=${search}&api_key=${API_KEY}&language=es-ES`);
            const data = await response.json();
            setMovieList(data.results);
            console.log(data.results);
        } catch (error) {
            console.error('Error al buscar peliculas: ', error);
        }
    }

    return (
        <div className='container'>

            <h1 className='title'>Buscador de Películas</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Escribí una pelicula'
                    value={search}
                    onChange={handleInputChange}
                />

                <button className='search-button'>Buscar</button>
            </form>

            {movieList &&
                <div className='movie-list'>
                    {movieList.map(movie => (
                        <div key={movie.id} className='movie-card'>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                        </div>
                    ))}
                </div>
            }

        </div>
    )
}

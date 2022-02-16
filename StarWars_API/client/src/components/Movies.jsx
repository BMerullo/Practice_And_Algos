import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Movies = (props) => {

    const [movie, setMovie] = useState({})
    const { movies, setMovies, id } = props

    useEffect((id) => {
        axios
            .get("https://swapi.dev/api/films/")
            .then((res) => {
                console.log("these are the results")
                console.log(res.data.results)
                setMovies(res.data.results)
            })
            .catch((err) => console.log(err))
        axios
            .get(`https://swapi.dev/api/films/1`)
            .then((res) => {
                console.log("Display One")
                console.log(res.data)
                setMovie(res.data)
            })
            .catch((err) => console.log(err))

    }, [id])

    const displayOneMovie = (id) => {
        // e.preventDefault()
        const newId = id
        axios
            .get(`https://swapi.dev/api/films/${newId}/`)
            .then((res) => {
                console.log("Display One")
                console.log(res.data)
                setMovie(res.data)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="display-flex">
            <div>
                {
                    movies.map((film, index) => (
                        <div key={film.name} className="content-container">
                            <Link to={`/characters/${index + 1}`} className="link" onClick={() => displayOneMovie(index + 1)}>
                                <p>
                                    {film.title}
                                </p>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className="display-one-container">
                <p>Episode: {movie.episode_id}</p>
                <h2 className="movie-title">{movie.title}</h2>
                <p className="display-one-text"></p>
                <p >{movie.opening_crawl}</p>
                <p className="display-one-text">Director: {movie.director}</p>
                <p className="display-one-text">Release Date: {movie.release_date}</p>
            </div>
        </div>

    )
}

export default Movies;
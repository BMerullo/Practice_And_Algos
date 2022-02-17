import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


const Species = (props) => {

    const [oneSpecies, setOneSpecies] = useState({});
    const {species, setSpecies, id} = props;

    useEffect((id) => {
        axios
            .get("https://swapi.dev/api/species/")
            .then((res) => {
                console.log("these are the results")
                console.log(res.data.results)
                setSpecies(res.data.results)
            })
            .catch((err) => console.log(err))
        axios
            .get(`https://swapi.dev/api/species/1`)
            .then((res) => {
                console.log("Display One")
                console.log(res.data)
                setOneSpecies(res.data)
            })
            .catch((err) => console.log(err))

    }, [id])

    const displayOneSpecies = (id) => {
        const newId = id
        axios
            .get(`https://swapi.dev/api/species/${newId}/`)
            .then((res) => {
                console.log("Display One")
                console.log(res.data)
                setOneSpecies(res.data)
            })
            .catch((err) => console.log(err))
    }

    return(
        <div className="display-flex">
            <div>
                {
                    species.map((species, index) => (
                        <div key={species.name} className="content-container">
                            <Link to={`/characters/${index + 1}`} className="link" onClick={() => displayOneSpecies(index + 1)}>
                                <p>
                                    {species.name}
                                </p>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className="display-one-container">
            <h2 className="name-style">{oneSpecies.name}</h2>
            <p className="display-one-text">{oneSpecies.classification}</p>
            <p className="display-one-text">{oneSpecies.designation}</p>
            <p className="display-one-text">Average Life Span: {oneSpecies.average_lifespan}</p>
            <p className="display-one-text">Language: {oneSpecies.language}</p>
            <p className="display-one-text"></p>
            </div>
        </div>
    )
}

export default Species;
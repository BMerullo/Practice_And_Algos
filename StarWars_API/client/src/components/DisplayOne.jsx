import axios from 'axios';
import React, { useEffect, useState } from 'react';



const DisplayOne = (props) => {
    const { id } = props
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${id}/`)
            .then((res) => {
                console.log("Display One")
                console.log(res.data)
                setPerson(res.data)
            })
            .catch((err) => console.log(err))
    } )

    return (
        <div>
            <p>{person.name}</p>
            <p>{person.hair_color}</p>
            <p>{person.eye_color}</p>
        </div>
    )
}

export default DisplayOne;
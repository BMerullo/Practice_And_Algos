import React, {useEffect, useState}from 'react';
import axios from 'axios'



const Categories = (props) => {

    const {starWarsList, setStarWarsList} = props;
    const [category, setCategory] = useState("")

    useEffect(()=> {
        axios.get(`https://swapi.dev/api${category}`)

    })

    return (
        <div>
            <h1>This is a Test</h1>
        </div>
    )
}

export default Categories;
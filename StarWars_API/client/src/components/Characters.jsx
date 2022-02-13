import React, { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';



const Characters = (props) => {

    const { people, setPeople } = props
    // const changeHandler = (e) =>{
    //     setChange = !change
    // }
    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/")
            .then((res) => {
                console.log("these are the results")
                console.log(res.data.results)
                setPeople(res.data.results)
            })
            .catch((err) => console.log(err))
    },)


    return (
        <div>
            {
                people.map((people, index) => (
                    <div key={people.name} className="content-container">
                        <Link to={`/characters/${index + 1}`} className="link" >
                            <p>
                                {people.name}
                            </p>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Characters;
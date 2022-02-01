import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SubNav1 from './SubNav1';
import { navigate } from '@reach/router';



const AddPlayer = (props) => {
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const { listPageIsActive, setListPageIsActive } = props
    useEffect(() => {
        setListPageIsActive(false)
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8000/api/player`, { 
                name, 
                position 
            })
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setName("");
                setPosition("");
                navigate("/player/list")
            })
            .catch((err) => {
                console.log("ERROR", err)})
    }


    return (
        <div>
            <SubNav1
                listPageIsActive={listPageIsActive}
                setListPageIsActive={setListPageIsActive} />
            <form action="" onSubmit={handleSubmit}>
                <h1>Add Player Component</h1>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <label htmlFor="Position">Position</label>
                <input
                    type="text"
                    id="position"
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                />
                <button type="submit">Add Player</button>
            </form>

        </div>
    )
}

export default AddPlayer;
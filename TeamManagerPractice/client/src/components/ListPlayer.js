import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SubNav1 from './SubNav1';




const ListPlayer = (props) => {
    const [playerData, setPlayerData] = useState([]);
    const { listPageIsActive, setListPageIsActive, managePlayerStatusIsActive, setManagePlayerStatusIsActive } = props
    
    useEffect(() => {
        setListPageIsActive(true);
        setManagePlayerStatusIsActive(false)
    })
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/player")
            .then((res) => {
                console.log(res.data);
                setPlayerData(res.data);
            })
            .catch((err) => {
                console.log(err.res)
            })
    }, []);

    const handleDelete = (playerId) => {
        axios
            .delete(`http://localhost:8000/api/player/${playerId}`)
            .then((res) => {
                const newList =(playerData.filter((player, index) => player._id !== playerId)
                )
                setPlayerData(newList)
            })
            .catch((err) => (console.log(err)
            ))
    }
    return (
        <div>
            <SubNav1
                listPageIsActive={listPageIsActive}
                setListPageIsActive={setListPageIsActive} />
            <h1>List Player Component</h1>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {playerData.map((player, index) => (
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td><button onClick={() => handleDelete(player._id)} type="button" className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListPlayer;
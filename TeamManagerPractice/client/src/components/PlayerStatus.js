import React, { useEffect, useState } from 'react';
import SubNav2 from './SubNav2';
import axios from 'axios';


const PlayerStatus = (props) => {
    const { managePlayerStatusIsActive, setManagePlayerStatusIsActive, gameId } = props
    const [playerData, setPlayerData] = useState([]);
    const [getRequest, setGetRequest] = useState(false)
    useEffect(() => {
        setManagePlayerStatusIsActive(true)
    })
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/player")
            .then((res) => {
                console.log(res.data)
                setPlayerData(res.data)
            })
            .catch((err) =>
                console.log(err.res))
    }, [getRequest]);

    const handleChangeGameStatus = (playerId, newStatus) => {
        axios
            .put(`http://localhost:8000/api/player/${playerId}`,
                { gameOneStatus: newStatus, })
            .then((res) => {
                console.log(res)
                setGetRequest(!getRequest)
            })
            .catch((err) => console.log(err.res))
    }
    return (
        <div>
            <h1>Player Status: Game {gameId}</h1>
            <SubNav2 gameId={gameId} />
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* CONDITION RENDER FOR GAMESTATUS === 1 */}
                    {gameId === "1" ? (
                        playerData.map((player, index) => {
                            return (
                                <tr key={player._id}>
                                    <td>{player.name}</td>
                                    <td>
                                        <button
                                            className={`${player.gameOneStatus === "Playing"
                                                    ? "green-btn"
                                                    : ""
                                                }`}
                                            onClick={() =>
                                                handleChangeGameStatus(player._id, "Playing")
                                            }
                                        >
                                            Playing
                                        </button>
                                        <button
                                            className={`${player.gameOneStatus === "Not Playing"
                                                    ? "red-btn"
                                                    : ""
                                                }`}
                                            onClick={() =>
                                                handleChangeGameStatus(player._id, "Not Playing")
                                            }
                                        >
                                            Not Playing
                                        </button>
                                        <button
                                            className={`${player.gameOneStatus === "Undecided"
                                                    ? "yellow-btn"
                                                    : ""
                                                }`}
                                            onClick={() =>
                                                handleChangeGameStatus(player._id, "Undecided")
                                            }
                                        >
                                            Undecided
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <></>
                    )}
                    {/* CONDITION RENDER FOR GAMESTATUS === 2 */}
                    {gameId === "2" ? (
                        playerData.map((player, index) => {
                            return (
                                <tr key={player._id}>
                                    <td>{player.name}</td>
                                    <td>
                                        <button
                                            className={`${player.gameTwoStatus === "Playing"
                                                    ? "green-btn"
                                                    : ""
                                                }`}
                                            onClick={() =>
                                                handleChangeGameStatus(player._id, "Playing")
                                            }
                                        >
                                            Playing
                                        </button>
                                        <button
                                            className={`${player.gameTwoStatus === "Not Playing"
                                                    ? "red-btn"
                                                    : ""
                                                }`}
                                            onClick={() =>
                                                handleChangeGameStatus(player._id, "Not Playing")
                                            }
                                        >
                                            Not Playing
                                        </button>
                                        <button
                                            className={`${player.gameTwoStatus === "Undecided"
                                                    ? "yellow-btn"
                                                    : ""
                                                }`}
                                            onClick={() =>
                                                handleChangeGameStatus(player._id, "Undecided")
                                            }
                                        >
                                            Undecided
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <></>
                    )}
                    {/* CONDITION RENDER FOR GAMESTATUS === 3 */}
                    {gameId === "3" ? (
                        playerData.map((player, index) => {
                            return (
                                <tr key={player._id}>
                                    <td>{player.name}</td>
                                    <td>
                                        <button
                                            className={`${player.gameThreeStatus === "Playing"
                                                    ? "green-btn"
                                                    : ""
                                                }`}
                                            onClick={() =>
                                                handleChangeGameStatus(player._id, "Playing")
                                            }
                                        >
                                            Playing
                                        </button>
                                        <button
                                            className={`${player.gameThreeStatus === "Not Playing"
                                                    ? "red-btn"
                                                    : ""
                                                }`}
                                            onClick={() =>
                                                handleChangeGameStatus(player._id, "Not Playing")
                                            }
                                        >
                                            Not Playing
                                        </button>
                                        <button
                                            className={`${player.gameThreeStatus === "Undecided"
                                                    ? "yellow-btn"
                                                    : ""
                                                }`}
                                            onClick={() =>
                                                handleChangeGameStatus(player._id, "Undecided")
                                            }
                                        >
                                            Undecided
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerStatus;
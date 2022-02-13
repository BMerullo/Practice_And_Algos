import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = (props) => {



    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item ">
                    <Link to="/characters" className="link">
                    <a className="nav-link">Characters</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Movies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Planets</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Species</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Starships</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Vehicles</a>
                </li>
            </ul>

        </div>
    )
}

export default NavBar
import React from 'react';
import { Link } from '@reach/router';



const NavBar = (props) => {



    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item ">
                    <Link to="/characters/1/" className="link, nav-link">Characters</Link>
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
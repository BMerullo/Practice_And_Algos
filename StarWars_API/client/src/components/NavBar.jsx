import React from 'react';
import { Link } from '@reach/router';



const NavBar = (props) => {



    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/movies/1" className="link, nav-link">Movies</Link>
                </li>
                <li className="nav-item ">
                    <Link to="/characters/1" className="link, nav-link">Characters</Link>
                </li>
                <li className="nav-item">
                <Link to="/planets/1" className="link, nav-link">Planets</Link>
                </li>
                <li className="nav-item">
                <Link to="/species/1" className="link, nav-link">Species</Link>
                </li>
                <li className="nav-item">
                <Link to="/spaceships/1" className="link, nav-link">Spaceships</Link>
                </li>
                <li className="nav-item">
                <Link to="/vehicles/1" className="link, nav-link">Vehicles</Link>
                </li>
            </ul>

        </div>
    )
}

export default NavBar
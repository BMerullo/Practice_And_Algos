import React, { useState } from 'react';
import { Link } from '@reach/router';

const NavBarMap = (props) => {
    const [activeNav, setActiveNav] = useState (0)
    const [links] = useState([
        {
            name: "Movies",
            link: "/movies/1"
        },
        {
            name: "Characters",
            link: "/characters/1"
        },
        {
            name: "Planets",
            link: "/planets/1"
        },
        {
            name: "Species",
            link: "/species/1"
        },
        {
            name: "Spacships",
            link: "/spaceships/4"
        },
        {
            name: "Vehicles",
            link: "/vehicles/1"
        }
    ])

    const activatedNav= (tabIndex)=> {
        setActiveNav(tabIndex)
    };
    const style = (index) => {
        if (index === activeNav) {
            return " nav-link active activeTab"
        }
        else {
            return "link, nav-link"
        }
    }
    



    return (
        <div>
            <ul className="nav nav-tabs">
                {
                    links.map((cat, index) => (
                        <li className="nav-item">
                            <Link
                                key={cat.name}
                                className={style(index)}
                                to={cat.link}
                                onClick={()=>{activatedNav(index)}}
                            >{cat.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NavBarMap;
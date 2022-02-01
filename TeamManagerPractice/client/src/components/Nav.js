import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';



const Nav = (props) => {

    const { managePlayerStatusIsActive, setManagePlayerStatusIsActive } = props
    const [managePlayersTabStyle, setManagePlayerTabStyle] = useState({})
    const [managePlayerStatusTabStyle, setManagePlayerStatusTabStyle] = useState({})
    const styleObjBold = {
        fontWeight: "800",
    };

    useEffect(() => {
        if (managePlayerStatusIsActive) {
            setManagePlayerStatusTabStyle(styleObjBold)
            setManagePlayerTabStyle({})
        } else {
            setManagePlayerStatusTabStyle({})
            setManagePlayerTabStyle(styleObjBold)
        }
    }, [managePlayerStatusIsActive])



    return (
        <div>
            <span style={{ ...managePlayersTabStyle }} className="global-nav-text">
                <Link to="players/list">Manage Players|</Link>
            </span>
            <span style={{ ...managePlayerStatusTabStyle }} className="global-nav-text">
                <Link to="/status/game/1">Manage Player Status</Link>
            </span>
        </div>
    )
}

export default Nav;
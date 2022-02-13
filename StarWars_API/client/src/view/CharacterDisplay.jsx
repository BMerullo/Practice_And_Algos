import React, { useState } from 'react';
import Characters from '../components/Characters';
import DisplayOne from '../components/DisplayOne';





const CharacterDisplay = (props) => {

    const [people, setPeople] = useState([]);
    const { id } = props
    
    // const [peopleId, setPeopleId] = useState({
    //     LukeSkywalker: "1",
    //     C3PO: "2",
    //     R2D2: "3",
    //     DarthVader: "4",
    //     LeiaOrgana: "5",
    //     OwenLars: "6",
    //     BeruWhitsun: "7",
    //     R5D4: "8",
    //     BiggsDarklighter: "9",
    //     ObiWanKenobi: "10",
    // })



    return (
        <div>
            <Characters people={people} setPeople={setPeople} id={id}  />
            <DisplayOne id={id} />
        </div>
    )
}

export default CharacterDisplay;
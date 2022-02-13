import React, {useState} from 'react';
import Characters from '../components/Characters';
import DisplayOne from '../components/DisplayOne';




const CharacterDisplay = (props) => {

    const [people, setPeople] = useState ([]);


    return(
        <div>
            <Characters people={people} setPeople={setPeople}/>
            <DisplayOne people={people} setPeople={setPeople}/>
        </div>
    )
}

export default CharacterDisplay;
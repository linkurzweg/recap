import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { receiveCharacter } from '../../actions';

import Character from './Character';

// This is a selector function
function selectCharacter(state) {
    return state.character;
}

const CharacterDetail = ({ match }) => {

    const character = useSelector(selectCharacter);
    const dispatch = useDispatch();

    useEffect(()=> {
        fetch(`https://rickandmortyapi.com/api/character/${match.params.id}`)
            .then(response => response.json())
            .then(data => dispatch(receiveCharacter(data)));
        // eslint-disable-next-line
    }, []);

    return (
        <Character character={character} />
    );
};

export default CharacterDetail;
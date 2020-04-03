import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Character from './Character';
import Link from '../Link'
import {receiveCharacters, } from '../../actions';

// This is a selector function
function selectCharacters(state) {
    return state.characters;
}

const Characters = () => {

    const characters = useSelector(selectCharacters);
    const dispatch = useDispatch();

    useEffect(()=> {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => dispatch(receiveCharacters(data.results)));
            // eslint-disable-next-line
    }, []);

    const characterList = characters.map(character => (
        <li  key={character.id}>
            <Link to={`/characters/${character.id}`}>
                <Character character={character} />
            </Link>
        </li>
    ));

    return (
        <ul>
            <li>
                <Link to="https//www.github.com">External link</Link>
            </li>
            {characterList}
        </ul>
    );
};

export default Characters;

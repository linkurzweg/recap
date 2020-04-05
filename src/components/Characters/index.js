import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Grid from '@material-ui/core/Grid';

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
        <Grid item xs={12} md={4} lg={3} key={character.id}>
            <Link to={`/characters/${character.id}`} style={{textDecoration: 'none'}}>
                <Character character={character} />
            </Link>
        </Grid>
    ));

    return (
        <Grid container spacing={3}>
            {characterList}
        </Grid>
    );
};

export default Characters;

import React, {Component} from 'react';
import Character from './Character';
import { Link } from "react-router-dom";

class Characters extends Component {
    constructor() {
        super();
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    characters: data.results
                })
            });
    }

    render() {

        const characterList = this.state.characters.map(character => (
            <Link to={`/characters/${character.id}`} key={character.id}>
                <li>
                    <Character character={character} />
                </li>
            </Link>
        ));

        return (
            <ul>
                {characterList}
            </ul>
        );
    }
}

export default Characters;
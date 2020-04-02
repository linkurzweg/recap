import React, {Component} from 'react';
import Character from './Character';

class CharacterDetail extends Component {
    constructor() {
        super();
        this.state = {
            character: {}
        }
    }

    componentDidMount() {
        fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data
                })
            });
    }

    render() {
        return (
            <Character character={this.state.character} />
        );
    }
}

export default CharacterDetail;
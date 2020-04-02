import React from 'react';

const Character = ({character}) => {
    const { name, image } = character;
    return (
        <div>
            <p>{name}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;
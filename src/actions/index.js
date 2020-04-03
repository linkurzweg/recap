export const RECEIVE_CHARACTERS = "RECEIVE_CHARACTERS";
export const RECEIVE_CHARACTER = "RECEIVE_CHARACTER";

/*
Actions are JS objects with at least a key called type and a value which is
the name of the action (they might have some other key and values).
Each of the following functions  return an action. These functions are called
action creators
*/

export const receiveCharacters = characters => ({
    type: RECEIVE_CHARACTERS,
    characters
});

export const receiveCharacter = character => ({
    type: RECEIVE_CHARACTER,
    character
});
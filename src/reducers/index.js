import { combineReducers } from "redux";
import {
  RECEIVE_CHARACTERS,
  RECEIVE_CHARACTER
} from '../actions';

export function charactersReducer(state = [], action) {
    switch (action.type) {
        case RECEIVE_CHARACTERS:
            return action.characters;
        default:
            return state;
    }
};

export function characterReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CHARACTER:
            return action.character;
        default:
            return state;
    }
};

export default combineReducers({
    characters: charactersReducer,
    character: characterReducer,
    // combineReducers can combine as many reducers as you need
});

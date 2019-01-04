import { profileRef } from "../config/firebase";
import * as firebase from 'firebase';

export const setFavoriteAnimal = (favoriteAnimal) => {
    return {
        type: "setFavoriteAnimal",
        value: favoriteAnimal,
    };
};

export const setPersonData = (personData) => {
    return {
        type: "setPersonData",
        value: personData
    };
};

export const fetchUser = (id) => async dispatch => {
    todosRef.child(id).on("value", snapshot => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};
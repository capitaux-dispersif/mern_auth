import { v4 as uuid } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';
const initialState = {
    items: [
        { id: uuid(), name: 'Project 1' },
        { id: uuid(), name: 'Project 2' },
        { id: uuid(), name: 'Project 3' },
        { id: uuid(), name: 'Project 4' },
        { id: uuid(), name: 'Project 7' },
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        default:
            return state;

    }
}
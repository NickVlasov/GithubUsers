import { FETCH_USER } from '../actions';
import { mapKeys } from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload.data;
            // return { ...state, [action.payload.data.login]: action.payload.data }
        default:
            return state;
    }
}
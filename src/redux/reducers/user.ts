// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_EMAIL } from '../actions';
import { ActionUser } from '../../types';

const INITIAL_STATE = {
  email: '',
};

export const userReducer = (state = INITIAL_STATE, action: ActionUser) => {
  switch (action.type) {
    case ADD_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

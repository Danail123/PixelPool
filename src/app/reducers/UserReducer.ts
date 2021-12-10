import { Reducer } from 'redux';
import { UserActions, UserActionTypes } from '../actions/UserActions';

export interface IUserState {
    logedIn: boolean;
}

const initialUserState: IUserState = {
    logedIn: false,
}

export const UserReducer: Reducer<IUserState, UserActions> = (
  state = initialUserState,
  action
) => {

  switch (action.type) {

    case UserActionTypes.LOGIN: {
      return {
        ...state,
        logedIn: action.logedIn
      };
    }

    default:
      return state;
  }
};
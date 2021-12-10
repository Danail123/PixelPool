import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } 
from 'redux-thunk';
import { IUserState } from '../reducers/UserReducer';

export enum UserActionTypes {
    LOGIN = 'LOGIN',
}

export interface IUserAnyAction {
        type: UserActionTypes.LOGIN;
        logedIn: boolean;
}

export type UserActions = IUserAnyAction;

export const BasicAction: ActionCreator<ThunkAction<Promise<any>, IUserState, null, IUserAnyAction>> = () => {
        return async (dispatch: Dispatch) => {
            try {
                // Your logic here
                dispatch({
                    LogedIn: true,
                    type: UserActionTypes.LOGIN
                })
            } catch (err) {
                console.error(err);
            }
        };
    };

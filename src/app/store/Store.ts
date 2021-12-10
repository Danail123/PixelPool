import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { UserReducer, IUserState } from '../reducers/UserReducer';

// Create an interface for the application state
export interface IAppState {
    basicState: IUserState
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
    basicState: UserReducer
});

// Create a configure store function of type `IAppState`
export default function configureStore (): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}

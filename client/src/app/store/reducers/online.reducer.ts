import { OnlineActionsEnum } from './../actions/online.actions';
import * as OnlineActions from '../actions/online.actions';
export function OnlineReducer(state: number = 0, action: OnlineActions.Actions) {
    switch(action.type){
        case OnlineActionsEnum.StoreOnline:
            state = action.payload;
            window.localStorage.setItem('online', state.toString());
            return state;
        default:
            return state;
    }
};
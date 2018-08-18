import { StatusActionsEnum } from './../actions/status.actions';
import * as StatusActions from '../actions/status.actions';
import { Status } from '../../models/status.model';
export function StatusReducer(state: Status, action: StatusActions.Actions) {
    switch(action.type){
        case StatusActionsEnum.StoreStatus:
            state = action.payload;
            window.localStorage.setItem('Status', state.toString());
            return state;
        default:
            return state;
    }
};
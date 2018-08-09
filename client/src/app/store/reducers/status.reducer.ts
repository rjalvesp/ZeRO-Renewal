import { StatusActionsEnum } from './../actions/Status.actions';
import * as StatusActions from '../actions/Status.actions';
import { Status } from '../../models/status.model';
export function StatusReducer(state: Status, action: StatusActions.Actions) {
    switch(action.type){
        case StatusActionsEnum.StoreStatus:
            state = action.payload;
            window.localStorage.setItem('Status', state.toString());
            return state;
        case StatusActionsEnum.RetrieveStatus:
            // state = parseInt(window.localStorage.getItem('Status').toString(), 10);
            return state;
        default:
            return state;
    }
};
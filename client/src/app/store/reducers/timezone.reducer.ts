import { TimezoneActionsEnum } from './../actions/timezone.actions';
import * as TimezoneActions from '../actions/timezone.actions';
export function TimezoneReducer(state: number = 0, action: TimezoneActions.Actions) {
    switch(action.type){
        case TimezoneActionsEnum.StoreTimezone:
            state = action.payload;
            window.localStorage.setItem('timezone', state.toString());
            return state;
        default:
            let stored = window.localStorage.getItem('timezone');
            state = parseInt(stored? stored.toString() : '0', 10);
            return state;
    }
};
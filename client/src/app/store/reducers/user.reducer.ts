import { UserActions, UserActionsEnum } from '../actions/user.actions';
import { User } from '../../models/user.model';
export function  UserReducer(state: User = new User({}), action: UserActions) {
    switch(action.type){
        case UserActionsEnum.StoreUser:
            state = action.payload;
            window.localStorage.setItem('user', JSON.stringify(state));
            return state;
        default:
        
            let stored = JSON.parse(window.localStorage.getItem('user'));
            state = new User(stored? stored : {});
            return state;
    }
};
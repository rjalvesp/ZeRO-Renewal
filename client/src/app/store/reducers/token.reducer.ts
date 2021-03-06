import { TokenActions, TokenActionsEnum } from '../actions/token.actions';
import { Token } from '../../models/token.model';
export function  TokenReducer(state: Token = new Token({}), action: TokenActions) {
    switch(action.type){
        case TokenActionsEnum.StoreToken:
            state = action.payload;
            window.localStorage.setItem('token', JSON.stringify(state));
            return state;
        default:
            let stored = JSON.parse(window.localStorage.getItem('token'));
            state = new Token(stored? stored : {});
            return state;
    }
};
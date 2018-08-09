import { TokenActions, TokenActionsEnum } from '../actions/token.actions';
import { Token } from '../../models/token.model';
export function  TokenReducer(state: Token = new Token({}), action: TokenActions) {
    switch(action.type){
        case TokenActionsEnum.StoreToken:
            window.localStorage.setItem('token', JSON.stringify(state));
            return state;
        case TokenActionsEnum.RetrieveToken:
            state = new Token(JSON.parse(window.localStorage.getItem('token')));
            return state;
        default:
            return state;
    }
};
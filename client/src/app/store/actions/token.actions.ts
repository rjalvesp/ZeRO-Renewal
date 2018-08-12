import { Action } from '@ngrx/store';
import { Token } from '../../models/token.model';
export enum TokenActionsEnum {
    StoreToken = '[Token] STORE',
    RetrieveToken = '[Token] RETRIEVE'
};

  
export class Retrieve implements Action {
    readonly type = TokenActionsEnum.RetrieveToken;

    constructor(public payload: Token) {}
}
export class Store implements Action {
    readonly type = TokenActionsEnum.StoreToken;

    constructor(public payload: Token) {}
}
  
export type TokenActions = Retrieve | Store;
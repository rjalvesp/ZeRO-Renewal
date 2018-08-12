import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
export enum UserActionsEnum {
    StoreUser = '[User] STORE',
    RetrieveUser = '[User] RETRIEVE'
};

  
export class Retrieve implements Action {
    readonly type = UserActionsEnum.RetrieveUser;

    constructor(public payload: User) {}
}
export class Store implements Action {
    readonly type = UserActionsEnum.StoreUser;

    constructor(public payload: User) {}
}
  
export type UserActions = Retrieve | Store;
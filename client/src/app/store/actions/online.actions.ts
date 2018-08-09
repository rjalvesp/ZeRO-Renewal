import { Action } from '@ngrx/store';
export enum OnlineActionsEnum {
    StoreOnline = '[Online] STORE',
    RetrieveOnline = '[Online] RETRIEVE'
};

  
export class Retrieve implements Action {
    readonly type = OnlineActionsEnum.RetrieveOnline;

    constructor(public payload: number) {}
}
export class Store implements Action {
    readonly type = OnlineActionsEnum.StoreOnline;

    constructor(public payload: number) {}
}
  
export type Actions = Retrieve | Store;
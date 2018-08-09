import { Status } from './../../models/status.model';
import { Action } from '@ngrx/store';
export enum StatusActionsEnum {
    StoreStatus = '[Status] STORE',
    RetrieveStatus = '[Status] RETRIEVE'
};

  
export class Retrieve implements Action {
    readonly type = StatusActionsEnum.RetrieveStatus;

    constructor(public payload: Status) {}
}
export class Store implements Action {
    readonly type = StatusActionsEnum.StoreStatus;

    constructor(public payload: Status) {}
}
  
export type Actions = Retrieve | Store;
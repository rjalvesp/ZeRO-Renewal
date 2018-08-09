import { Action } from '@ngrx/store';
export enum TimezoneActionsEnum {
    StoreTimezone = '[Timezone] STORE',
    RetrieveTimezone = '[Timezone] RETRIEVE'
};

  
export class Retrieve implements Action {
    readonly type = TimezoneActionsEnum.RetrieveTimezone;

    constructor(public payload: number) {}
}
export class Store implements Action {
    readonly type = TimezoneActionsEnum.StoreTimezone;

    constructor(public payload: number) {}
}
  
export type Actions = Retrieve | Store;
import { Token } from '../../models/token.model';
import { Status } from '../../models/status.model';
export interface AppState {
    readonly timezone: number,
    readonly token: Token,
    readonly online: number,
    readonly status: Status
}
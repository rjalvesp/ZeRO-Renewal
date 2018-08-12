import { Token } from '../../models/token.model';
import { Status } from '../../models/status.model';
import { User } from '../../models/user.model';
export interface AppState {
    timezone: number,
    token: Token,
    user: User,
    online: number,
    status: Status
}
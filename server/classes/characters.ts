import { DBConnections } from './connection';

import { Character } from '../src/entity/character';
var _ = require('lodash');
export class Characters {
    static async usersOnline() : Promise<number> {
        let connection = await DBConnections.RAthenaConnection;
        let value = await connection.getRepository(Character)
            .createQueryBuilder('char')
            .select('SUM(char.online)', "sum")
            .getRawOne();
        return _.get(value, 'sum', 0);
    }
}
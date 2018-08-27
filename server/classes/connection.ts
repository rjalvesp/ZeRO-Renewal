import { GuildMember } from './../src/entity/guild-member';

import "reflect-metadata";
import {createConnection} from "typeorm";
import { Character } from "../src/entity/character";
import { ServerInfo } from "../src/entity/server-info";
import { User } from "../src/entity/user";
import { Login } from "../src/entity/login";
import { Token } from "../src/entity/token";
import { News } from "../src/entity/news";
import { Faq } from "../src/entity/faq";
import { FaqCategory } from "../src/entity/faq-category";
import { RecoverPassword } from "../src/entity/recover-password";
import { Guild } from "../src/entity/guild";
import { GuildCastle } from "../src/entity/guild-castle";
import { Vending } from "../src/entity/vending";
import { VendingItem } from '../src/entity/vending-item';
export class DBConnections {
    static RAthenaConnection : Promise<any> = createConnection({
        name: 'rathena',
        type: "mysql",
        host: "127.0.0.1",
        port: 3306,
        username: "root",
        password: "ram10110.S1",
        database: "rathena",
        entities: [
            Character,
            ServerInfo,
            Login,
            Guild,
            GuildCastle,
            GuildMember,
            Vending,
            VendingItem
        ],
        synchronize: false,
        logging: false
    })
    static WebConnection : Promise<any> = createConnection({
        name: 'web',
        type: "mysql",
        host: "127.0.0.1",
        port: 3306,
        username: "web",
        password: "qwe123.S1",
        database: "web",
        entities: [
            User,
            Token,
            News,
            Faq,
            FaqCategory,
            RecoverPassword
        ],
        synchronize: true,
        logging: false
    })
}

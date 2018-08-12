
import "reflect-metadata";
import {createConnection} from "typeorm";
import { Character } from "../src/entity/character";
import { ServerInfo } from "../src/entity/server-info";
import { User } from "../src/entity/user";
import { Login } from "../src/entity/login";
import { Token } from "../src/entity/token";
export const RAthenaConnection = createConnection({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "ragnarok",
    password: "ragnarok",
    database: "rathena",
    entities: [
        Character,
        ServerInfo,
        Login
    ],
    synchronize: true,
    logging: false
})
export const WebConnection = createConnection({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "ragnarok",
    password: "ragnarok",
    database: "web",
    entities: [
        User,
        Token
    ],
    synchronize: true,
    logging: false
})
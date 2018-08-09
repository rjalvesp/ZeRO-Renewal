
import "reflect-metadata";
import {createConnection} from "typeorm";
import { Character } from "../src/entity/character";
import { ServerInfo } from "../src/entity/server-info";
export const RAthenaConnection = createConnection({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "ragnarok",
    password: "ragnarok",
    database: "rathena",
    entities: [
        Character,
        ServerInfo
    ],
    synchronize: true,
    logging: false
})
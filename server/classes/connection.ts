
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
export const RAthenaConnection = createConnection({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "ram10110.S1",
    database: "rathena",
    entities: [
        Character,
        ServerInfo,
        Login
    ],
    synchronize: false,
    logging: false
})
export const WebConnection = createConnection({
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
        FaqCategory
    ],
    synchronize: true,
    logging: false
})
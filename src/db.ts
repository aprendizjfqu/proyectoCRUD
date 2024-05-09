import { DataSource } from "typeorm"
import { User } from "./entities/user"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1108",
    database: "prueba1",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})
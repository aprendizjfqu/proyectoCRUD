import { DataSource } from "typeorm"
import { User } from "./entities/user"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "920811",
    database: "prueba2.3",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})
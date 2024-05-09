import "reflect-metadata"
import app from './app'
import { AppDataSource } from "./db"

async function main() {

    try {
        await AppDataSource.initialize()

        app.listen(3005)
        console.log("server is listening on port", 3005)
    } catch (error) {
        console.error(error)
    }
}
main()
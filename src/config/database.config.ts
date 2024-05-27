import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const devConfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'redhat@123',
    database: 'nestjscrud ',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
}
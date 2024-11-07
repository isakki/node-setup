import { DataSource } from 'typeorm';
import { join } from 'path';
import { createConnection } from 'typeorm';
import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const connectionOptions: ConnectionOptions = {
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_PORT || '3306', 10),
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || '',
    entities: [join(__dirname, '../models/entities/*{.ts,.js}')],
    synchronize: true
};

export const dataSource = createConnection(connectionOptions)
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err:any) => {
        console.error("Error during Data Source initialization", err);
    });

export default function getDataSource(): Promise<DataSource> {
    return dataSource;
}

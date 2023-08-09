import { Pool } from 'pg';
class Database {
    USERNAME_DB = 'postgres';
    PASSWORD_DB = 'root';
    PORT_DB = 5432;
    DATABASE_NAME_DB = 'tag_counter_db';
    HOST_DB = 'localhost';
    connection;
    constructor() {
        this.connection = new Pool({
            user: this.USERNAME_DB,
            host: this.HOST_DB,
            database: this.DATABASE_NAME_DB,
            password: this.PASSWORD_DB,
            port: this.PORT_DB,
        });
        this.testConnect();
    }
    async testConnect() {
        try {
            await this.connection.query('SELECT NOW()');
            console.log('Connection with database has been established successfully');
        }
        catch (error) {
            console.log('Connection with database has been failed');
        }
    }
}
export default Database;

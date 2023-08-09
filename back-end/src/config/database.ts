import { Pool } from 'pg';
class Database {
    private USERNAME_DB = 'postgres' as string;
    private PASSWORD_DB = 'root' as string;
    private PORT_DB = 5432 as number;
    private DATABASE_NAME_DB = 'tag_counter_db' as string;
    private HOST_DB = 'localhost' as string;
    public connection;

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

    private async testConnect() {
        try {
            await this.connection.query('SELECT NOW()');
            console.log(
                'Connection with database has been established successfully'
            );
        } catch (error) {
            console.log('Connection with database has been failed');
        }
    }
}

export default Database;

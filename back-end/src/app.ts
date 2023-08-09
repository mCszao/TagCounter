import express from 'express';
import Database from './config/database';
import router from './routes/router';

class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.router();
        this.database();
    }

    private database(): void {
        new Database();
    }

    private router(): void {
        this.server.use(router);
    }
}

export default new App();

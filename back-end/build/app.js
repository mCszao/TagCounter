import express from 'express';
import Database from './config/database';
import router from './routes/router';
class App {
    server;
    constructor() {
        this.server = express();
        this.router();
        this.database();
    }
    database() {
        new Database();
    }
    router() {
        this.server.use(router);
    }
}
export default new App();

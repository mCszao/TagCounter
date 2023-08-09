import Database from '../../config/database';
export class AnalyticsRepository {
    repository = new Database().connection;
    async save(entity) {
        try {
            await this.repository.query('INSERT INTO analytics (id, url) VALUES ($1, $2)', [entity.id_analytics, entity.url]);
        }
        catch (error) {
            console.log('Error: ' + error);
        }
    }
    async findByUrl(url) {
        try {
            return this.repository.query('SELECT id, url, tag_selector, quantity FROM analytics INNER JOIN counter ON analytics.id = counter.id_analytics WHERE url = $1', [url]);
        }
        catch (error) {
            throw new Error(error);
        }
    }
}

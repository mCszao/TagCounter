import Database from '../../config/database';
export class CounterRepository {
    repository = new Database().connection;
    async save(entity) {
        try {
            await this.repository.query('INSERT INTO counter (id_analytics, tag_selector, quantity) VALUES ($1, $2, $3)', [entity.id_analytics, entity.tag_selector, entity.quantity]);
        }
        catch (error) {
            console.log('Error: ' + error);
        }
    }
}

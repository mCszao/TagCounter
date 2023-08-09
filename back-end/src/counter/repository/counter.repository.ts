import Database from '../../config/database';
import { ICounterModel } from '../model/counter.model';

interface ICounterRepository {
    save(entity: ICounterModel): Promise<void>;
}

export class CounterRepository implements ICounterRepository {
    private repository = new Database().connection;

    public async save(entity: ICounterModel): Promise<void> {
        try {
            await this.repository.query(
                'INSERT INTO counter (id_analytics, tag_selector, quantity) VALUES ($1, $2, $3)',
                [entity.id_analytics, entity.tag_selector, entity.quantity]
            );
        } catch (error) {
            console.log('Error: ' + error);
        }
    }
}

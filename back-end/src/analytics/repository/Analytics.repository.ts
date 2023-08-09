import { QueryResult } from 'pg';
import Database from '../../config/database';
import { AnalyticsModel, IAnalyticsModel } from '../model/Analytics.model';

interface IAnalyticsRepository {
    save(entity: AnalyticsModel): Promise<void>;
    findByUrl(url: string): Promise<QueryResult<IAnalyticsModel>>;
}

export class AnalyticsRepository implements IAnalyticsRepository {
    private repository = new Database().connection;

    public async save(entity: AnalyticsModel): Promise<void> {
        try {
            await this.repository.query(
                'INSERT INTO analytics (id, url) VALUES ($1, $2)',
                [entity.id_analytics, entity.url]
            );
        } catch (error) {
            console.log('Error: ' + error);
        }
    }

    public async findByUrl(url: string): Promise<QueryResult<IAnalyticsModel>> {
        try {
            return this.repository.query(
                'SELECT id, url, tag_selector, quantity FROM analytics INNER JOIN counter ON analytics.id = counter.id_analytics WHERE url = $1',
                [url]
            );
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

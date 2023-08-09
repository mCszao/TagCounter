import { v4 } from 'uuid';
import { AnalyticsModel } from '../model/Analytics.model';
import { AnalyticsRepository } from '../repository/Analytics.repository';
import { CounterRepository } from '../../counter/repository/counter.repository';
import { CounterModel } from '../../counter/model/counter.model';
class AnalyticsService {
    AnalyticsRepo = new AnalyticsRepository();
    CounterRepo = new CounterRepository();
    async insert(dto) {
        const id = v4();
        const analyticsModel = new AnalyticsModel(id, dto.url);
        await this.AnalyticsRepo.save(analyticsModel);
        try {
            dto.tagSet.forEach((tag) => {
                const counterModel = new CounterModel(id, tag.tagSelector, tag.tot);
                this.CounterRepo.save(counterModel);
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async selectByUrl(url) {
        try {
            const response = (await this.AnalyticsRepo.findByUrl(url));
            if (response.rowCount === 0)
                return;
            return response.rows;
        }
        catch (error) {
            console.log(error.message);
        }
    }
}
export default new AnalyticsService();

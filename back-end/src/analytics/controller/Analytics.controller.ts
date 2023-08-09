import { Request, Response } from 'express';

import { IAnalyticsDTO } from '../dto/Analytics.dto';
import AnalyticsServices from '../services/Analytics.services';

class AnalyticsController {
    public async add(req: Request, res: Response): Promise<Response> {
        try {
            const dto = req.body as IAnalyticsDTO;
            console.log(dto);
            await AnalyticsServices.insert(dto);
            return res.status(200).json(dto);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    public async getByUrl(req: Request, res: Response): Promise<Response> {
        try {
            const { url } = req.body;
            console.log(url);
            const result = await AnalyticsServices.selectByUrl(url);
            return res.status(200).json({
                searchedURL: url,
                result,
            });
        } catch (error) {
            return res.status(500).json({
                error,
            });
        }
    }
}

export default new AnalyticsController();

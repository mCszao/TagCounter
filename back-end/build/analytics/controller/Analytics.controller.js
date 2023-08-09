import AnalyticsServices from '../services/Analytics.services';
class AnalyticsController {
    async add(req, res) {
        try {
            const dto = req.body;
            console.log(dto);
            await AnalyticsServices.insert(dto);
            return res.status(200).json(dto);
        }
        catch (error) {
            return res.status(500).json(error);
        }
    }
    async getByUrl(req, res) {
        try {
            const { url } = req.body;
            console.log(url);
            const result = await AnalyticsServices.selectByUrl(url);
            return res.status(200).json({
                searchedURL: url,
                result,
            });
        }
        catch (error) {
            return res.status(500).json({
                error,
            });
        }
    }
}
export default new AnalyticsController();

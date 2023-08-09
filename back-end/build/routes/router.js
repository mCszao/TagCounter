import express from 'express';
import cors from 'cors';
import AnalyticsController from '../analytics/controller/Analytics.controller';
const router = express.Router();
router.use(express.json());
router.use(cors());
router.post('/analytics', AnalyticsController.getByUrl);
router.post('/', AnalyticsController.add);
export default router;

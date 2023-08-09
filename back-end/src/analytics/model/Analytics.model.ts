export interface IAnalyticsModel {
    id_analytics: string;
    url: string;
}

export class AnalyticsModel implements IAnalyticsModel {
    id_analytics: string;
    url: string;
    constructor(uuid: string, url: string) {
        this.id_analytics = uuid;
        this.url = url;
    }
}

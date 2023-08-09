import ServiceApi from './api/ServiceApi';
import getSourceCode from './getSourceCode';
import beautyHTMLCollection from './beautyHTMLCollection';
import AnalyticsDTO from '../class/AnalyticsDTO';
import GridAnalytics from '../components/GridAnalytics/GridAnalytics';
export default function inputCycleProcess(list, buttonTarget) {
    const api = new ServiceApi();

    Array.from(list).forEach(async (url, index) => {
        const response = await getSourceCode(url);
        const beauty = beautyHTMLCollection(response);
        const dto = new AnalyticsDTO(url, beauty);
        try {
            await api.postListSelector(dto).then((response) => {
                const { template, renderBoxTagItem } = GridAnalytics(
                    response,
                    index
                );
                const appNode = document.getElementById('app');
                appNode.innerHTML += template;
                response.tagSet.forEach((tag) => {
                    renderBoxTagItem(tag);
                });
            });
            await api.getListSelectorByUrl(url);
        } catch (error) {
            console.error(error);
        }
    });
}

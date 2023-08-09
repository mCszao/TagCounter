class ServiceApi {
    BASE_URL;
    constructor() {
        this.BASE_URL = 'http://localhost:3000/';
    }

    async postListSelector(dto) {
        const response = await fetch(
            this.BASE_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dto),
            },
            { mode: 'cors' }
        );
        const json = await response.json();
        return json;
    }

    async getListSelectorByUrl(url) {
        const response = await fetch(this.BASE_URL + 'analytics', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: url }),
        });

        const json = await response.json();

        return json;
    }
}

export default ServiceApi;

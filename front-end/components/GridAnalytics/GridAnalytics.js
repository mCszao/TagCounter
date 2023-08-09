export default function GridAnalytics(response, index) {
    const template = `
    <div class="container" >
        <h3>${response.url}</h3>
            <div class="tag-box-container" id=${index}>
            
            </div>
    </div>
`;

    function renderBoxTagItem(tag) {
        const template = `
            <div class="tag-box-item">
                <h3>${tag.tagSelector}</h3>
                <i>${tag.tot}</i>
            </div>`;
        document.getElementById(index).innerHTML += template;
    }
    return {
        template,
        renderBoxTagItem,
    };
}

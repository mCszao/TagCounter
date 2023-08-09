export default async function getSourceCode(url) {
    let responseData = await fetch(url, { mode: 'cors' });
    let text = await responseData.text();
    return text;
}

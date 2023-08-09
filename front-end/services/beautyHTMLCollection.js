import Selector from '../class/Selector';

let tagList = [];

export default function beautyHTMLCollection(hmtlString) {
    if (tagList.length != 0) tagList = [];
    let parser = new DOMParser();
    let anotherPage = parser.parseFromString(hmtlString, 'text/html');
    tagCounter(anotherPage.children);
    return tagList;
}

function tagCounter(tagCollection) {
    Array.from(tagCollection).forEach((tag) => {
        if (!incrementWhereTagExists(tagList, tag.tagName))
            tagList.push(new Selector(tag.tagName));
        if (tag.hasChildNodes) {
            tagCounter(tag.children);
        }
    });
}

function incrementWhereTagExists(listComparable, comparable) {
    let equal = false;
    listComparable.forEach((selector, index) => {
        if (selector.tagSelector == comparable) {
            listComparable[index].totIncrement();
            equal = true;
        }
    });
    return equal;
}

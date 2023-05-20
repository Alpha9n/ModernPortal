export const getInfo = (): HTMLCollectionOf<Element> | undefined => {
    const infoWrapper = document.getElementById('WsyuEvprPortlet');
    const infoList = infoWrapper?.getElementsByClassName('details');
    return infoList;
}
const campusmateContainer = document.querySelector<HTMLDivElement>('body > div#container')!;
const topPagePath = '/portal/top.do';

export const isUserLoggedIn = () => campusmateContainer.querySelector('#loginArea') == null;
export const isTopPage = () => (isUserLoggedIn() && (location.pathname == topPagePath));
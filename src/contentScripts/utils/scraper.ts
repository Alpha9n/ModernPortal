const campusmateContainer = document.querySelector<HTMLDivElement>('body > div#container')!;

export const isUserLoggedIn = () => campusmateContainer.querySelector('#loginArea') == null;

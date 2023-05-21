import ReactDOM from 'react-dom/client';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/404';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/general.css';
import { isUserLoggedIn } from '../utils/scraper';
import React from 'react';

const stylesheets = [...document.getElementsByTagName('link')];
const container = document.getElementById('container');
const slideButton = document.getElementById('slide');
const returnTop = document.getElementById('pageTopButton');
const title = '日本教育財団 ポータルサイト';
const topPageURL = 'https://portal.nkz.ac.jp/portal/top.do';

const removePage = () => {
    container!.style.display = 'none';
    document.getElementsByClassName('qtip')?.[0]?.remove();
}

const routingPage = (): JSX.Element => {
    if (isUserLoggedIn()) {
        return <Login title={title} topPageURL={topPageURL} />
    } else {
        return <NotFound title={title} topPageURL={topPageURL} />
    }
}

const mountApp = () => {
    let reactWrapepr = document.createElement('div');

    reactWrapepr.id = 'reactWrapper';
    document.body.appendChild(reactWrapepr);
    ReactDOM.createRoot(reactWrapepr as HTMLElement).render(
        <React.StrictMode>
            <ChakraProvider>
                {routingPage()}
            </ChakraProvider>
        </React.StrictMode>
    );
}

const removeStyles = () => {
    // linkタグのうちcssとリンクしているものを削除
    for (let i in stylesheets) {
        const sheet = stylesheets[i];
        const type = sheet.getAttribute('type');
        if (!!type && type.toLowerCase() == 'text/css') {
            sheet.parentNode!.removeChild(sheet);
        }
    }
    returnTop!.remove();
    slideButton!.remove();
}

removeStyles();
removePage();
mountApp();

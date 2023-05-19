import '../styles/general.css'

const removeHeaderElements = ['head_top', 'head_left', 'head_base'];
const removeButtons = ['f_large', 'f_middle', 'f_small'];

const stylesheets = [...document.getElementsByTagName('link')];
const container = document.getElementById('container');
const header = document.getElementById('header');
const slideButton = document.getElementById('slide');
const links = document.getElementById('side_menu');
const returnTop = document.getElementById('pageTopButton');
const buttons = document.getElementsByClassName('button')[0];

const removeStyles = (el) => {
    // html埋め込みのcssの削除
    // el.removeAttribute('style');

    // if (el.childNodes.length > 0) {
    //     for (let child in el.childNodes) {
    //         if (el.childNodes[child].nodeType == 1)
    //             removeStyles(el.childNodes[child]);
    //     }
    // }

    // linkタグのうちcssとリンクしているものを削除
    for (let i in stylesheets) {
        const sheet = stylesheets[i];
        const type = sheet.getAttribute('type');

        if (!!type && type.toLowerCase() == 'text/css')
            sheet.parentNode.removeChild(sheet);
    }
    returnTop.remove();
    slideButton.remove();

}

const createHeader = () => {
    removeHeaderElements.forEach((i) => {
        document.getElementById(i).remove();
    });
    removeButtons.forEach((i) => {
        console.log(`remove element ${i}`);
        document.getElementById(i).remove();
    })
    let title = document.createElement('a');
    title.textContent = '日本教育財団 ポータルサイト';
    title.id = 'portalID';
    title.href = 'https://portal.nkz.ac.jp/portal/top.do';
    document.getElementById('head_right').appendChild(title);
    document.getElementById('top_menu').appendChild(buttons);
}

const createFooter = () => {
    let footer = document.createElement('div');
    footer.id = 'footer';
    container.appendChild(footer);
    footer.appendChild(links);
}

removeStyles(document.body);
createFooter();
createHeader();
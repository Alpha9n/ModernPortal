const removeStyles = (el) => {
    // html埋め込みのcssの削除
    el.removeAttribute('style');

    if (el.childNodes.length > 0) {
        for (let child in el.childNodes) {
            if (el.childNodes[child].nodeType == 1)
                removeStyles(el.childNodes[child]);
        }
    }
}
const stylesheets = [...document.getElementsByTagName('link')];

// linkタグのうちcssとリンクしているものを削除
for (let i in stylesheets) {
    const sheet = stylesheets[i];
    const type = sheet.getAttribute('type');

    if (!!type && type.toLowerCase() == 'text/css')
        sheet.parentNode.removeChild(sheet);
}

removeStyles(document.body);
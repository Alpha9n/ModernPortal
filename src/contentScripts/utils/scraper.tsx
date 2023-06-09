import { Link, ListItem } from '@chakra-ui/react';
import { DateTime } from 'luxon';
import { ReactNode } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const campusmateContainer   = document.querySelector<HTMLDivElement>('body > div#container')!;
const loginDataContainer    = campusmateContainer.querySelector('#login_inf')!;
const linkListContainer     = campusmateContainer.querySelector('#sideMenuMiddle')!;
const topPagePath           = '/portal/top.do';

// ログイン情報取得用interface
interface LoginData {
    lastLogin:      DateTime;
    studentNumber?: string;
    studentName?:   string;
}

interface LinkListData {
    linksTitle:      string;
    links:          Array<ReactNode>;
}


export const isUserLoggedIn = () => campusmateContainer.querySelector('#loginArea') == null;
export const isTopPage      = () => (isUserLoggedIn() && (location.pathname == topPagePath));

export const getLinkList    = (): Array<LinkListData> => {
    // リンク一覧を#sideMenuMiddle内から取得, parseしてArrayとして返す
    const linkList: Array<LinkListData> = [];
    const menuSection = linkListContainer.querySelectorAll('ul');
    
    menuSection.forEach((elem) => {
        let linkDataList: Array<ReactNode> = [];
        const labelName = elem.querySelector('.label')?.textContent!;

        elem.querySelectorAll('a').forEach((linkItem, index) => {
            const isExternal =  (labelName === '自宅用メニュー')? true : false;
            const icon =        isExternal? <FaExternalLinkAlt/> : '';
            
            const reactElem: ReactNode = (
                <ListItem
                    display={'flex'}
                    key={index}>
                    <Link
                        href={linkItem.getAttribute('href')!}
                        isExternal={isExternal}
                        mr={'1em'}>
                        {linkItem.textContent}
                    </Link>
                    {icon}
                </ListItem>
            );
            linkDataList.push(reactElem);
        });
        const linkListData: LinkListData = {
            linksTitle: labelName,
            links:      linkDataList
        };
        linkList.push(linkListData);
    });

    return linkList;
};

export const getLoginData   = (): LoginData => {
    // YYYY年MM月DD日\nHH時MM分\nの形式で取得されるので, parseしてDateTimeに変換
    const plainDate = loginDataContainer.querySelector<HTMLDivElement>('.date')!.innerText.replaceAll(/[\s\n\r]/g, '');
    const plainUser = loginDataContainer.querySelector<HTMLDivElement>('.user')!.innerText;

    const formatDate = plainDate
        .replace(
            (/(\d{4})年(\d{1,2})月(\d{1,2})日(\d{1,2})時(\d{1,2})分/g),
            '$1-$2-$3 $4:$5'
        );

    const loginDateTime = DateTime.fromFormat(
        formatDate,
        'yyyy-L-d H:m'
    );

    const formatUser = plainUser.match(/[^'\n]+/g)!;

    // ログイン情報を#login_inf内から取得, parseしてObjectとして返す
    const loginData: LoginData = {
        lastLogin:      loginDateTime,
        studentNumber:  formatUser[2],
        studentName:    formatUser[4]
    };

    return loginData;
};

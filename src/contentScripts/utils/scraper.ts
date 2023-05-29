import { DateTime } from 'luxon';

const campusmateContainer   = document.querySelector<HTMLDivElement>('body > div#container')!;
const loginDataContainer    = campusmateContainer.querySelector('#login_inf')!;
const linkListContainer     = campusmateContainer.querySelector('#sideMenuMiddle')!;
const topPagePath           = '/portal/top.do';

// ログイン情報取得用interface
interface LoginData {
    lastLogin:      DateTime;
    studentNumber?:    string;
    studentName?:      string;
}

export const isUserLoggedIn = () => campusmateContainer.querySelector('#loginArea') == null;
export const isTopPage      = () => (isUserLoggedIn() && (location.pathname == topPagePath));

export const getLoginData   = (): LoginData => {
    // YYYY年MM月DD日\nHH時MM分
    const plainDate = loginDataContainer.querySelector<HTMLDivElement>('.date')!.innerText;
    const plainUser = loginDataContainer.querySelector<HTMLDivElement>('.user')!.innerText;

    const formatDate = plainDate.replace(
        (/\s+(\d{4})年(\d{1,2})月(\d{1,2})日\s+\n\s+(\d{1,2})時(\d{1,2})分\s+/g), 
        '$1-$2-$3 $4:$5'
        );
    const loginDateTime = DateTime.fromFormat(
        formatDate,
        'yyyy-L-dd HH:mm'
        );
    const formatUser = plainUser.match(/[^'\n]+/g)!;
    

    // ログイン情報を#login_inf内から取得, parseしてObjectとして返す
    const loginData: LoginData = {
        lastLogin:  loginDateTime,
        studentNumber: formatUser[2],
        studentName:  formatUser[4]
    }
    return loginData
}
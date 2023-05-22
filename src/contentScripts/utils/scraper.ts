const campusmateContainer = document.querySelector<HTMLDivElement>('body > div#container')!;
const topPagePath = '/portal/top.do';

// ログイン情報取得用interface
interface LoginData {
    lastLogin: Date;
    loginNumber: string;
    loginName: string;
}

export const isUserLoggedIn = () => campusmateContainer.querySelector('#loginArea') == null;
export const isTopPage = () => (isUserLoggedIn() && (location.pathname == topPagePath));

export const getLoginData = (): LoginData => {
    // ログイン情報を#login_inf内から取得, parseしてObjectとして返す
    const loginData: LoginData = {
        lastLogin: new Date(),
        loginNumber: '',
        loginName: ''
    }
    return loginData
}
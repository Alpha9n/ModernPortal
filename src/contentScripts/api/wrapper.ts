export const CAMPUSMATE_LOGIN_URL = 'https://portal.nkz.ac.jp/portal/login.do';
export const CAMPUSMATE_TOP_URL = 'https://portal.nkz.ac.jp/portal/top.do'

export const login = (userId: string, password: string): Promise<boolean> => {
    const params = new URLSearchParams();
    params.append('buttonName', 'login');
    params.append('userId', userId);
    params.append('password', password);

    const request = new Request(CAMPUSMATE_LOGIN_URL, {
        method: 'POST',
        cache: 'no-cache',
        headers: new Headers([
            [ 'Content-Type', 'application/x-www-form-urlencoded' ]
        ]),
        body: params
    });

    return fetch(request).then((response): boolean => {
        if (response.redirected) {
            location.href = CAMPUSMATE_TOP_URL;

            return true;
        } else {
            return false;
        }
    });
};

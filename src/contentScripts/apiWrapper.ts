export const CAMPUSMATE_LOGIN_URL = 'https://portal.nkz.ac.jp/portal/login.do';
export const CAMPUSMATE_LOGOUT_URL = 'https://portal.nkz.ac.jp/portal/logout.do';
export const CAMPUSMATE_TOP_URL = 'https://portal.nkz.ac.jp/portal/top.do'

export const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    console.log(form!.userId.value, form!.password.value)

    const params = new URLSearchParams();
    params.append('buttonName', 'login');
    params.append('userId', form!.userId.value);
    params.append('password', form!.password.value);

    const request = new Request(CAMPUSMATE_LOGIN_URL, {
        method: 'POST',
        cache: 'no-cache',
        headers: new Headers([
            ['Content-Type', 'application/x-www-form-urlencoded']
        ]),
        body: params,
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

export const handleLogout = () => {
    const request = new Request(CAMPUSMATE_LOGOUT_URL, {
        method: 'POST',
        cache: 'no-cache',
        headers: new Headers([
            ['Content-Type', 'application/x-www-form-urlencoded']
        ])
    });

    if (confirm('ログアウトしますか？')) {
        return fetch(request).then((response): boolean => {
            if (response.redirected) {
                location.href = CAMPUSMATE_LOGIN_URL;

                return true;
            } else {
                return false;
            }
        });
    }
    return;
};

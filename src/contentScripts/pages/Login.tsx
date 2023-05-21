import { useRef } from 'react';
import { login as loginToCampusmate } from '../apiWrapper';
import { Header } from '../components/Header';
import { Stack, Center, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';

interface LoginProps {
    title: string;
    topPageURL: string;
}

export const Login = ({ title, topPageURL }: LoginProps) => {
    const userIdRef = useRef<HTMLInputElement>(null!);
    const passwordRef = useRef<HTMLInputElement>(null!);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginToCampusmate(userIdRef.current.value, passwordRef.current.value);
    }

    return (
        <>
            <Header title={title} topPageURL={topPageURL} />
            <Center
                m={'2rem auto'}
                w={'50%'}>
                <Stack>
                    <form
                        name='loginFrom'
                        method='post'
                        action='/portal/login.do'
                        onSubmit={(e) => handleLogin(e)}>
                        <Input type='hidden' name='login' />
                        <FormControl>
                            <FormLabel>ユーザID</FormLabel>
                            <Input
                                ref={userIdRef}
                                placeholder='User ID'
                                type='text'
                                name='userId'
                                />
                        </FormControl>
                        <FormControl>
                            <FormLabel>パスワード</FormLabel>
                            <Input
                                ref={passwordRef}
                                placeholder='Password'
                                type='password'
                                name='password'
                                />
                        </FormControl>
                        <Button type='submit'>ログイン</Button>
                    </form>
                </Stack>
            </Center>
        </>
    );
};

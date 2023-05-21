import { useRef } from 'react';
import { login as loginToCampusmate } from '../apiWrapper';
import { Header } from '../components/Header';
import { Stack, Center, Input, Text, Button, FormControl } from '@chakra-ui/react';
interface LoginProps {
    title: string;
    topPageURL: string;
}

export const Login = ({ title, topPageURL }: LoginProps) => {
    const userIdRef = useRef<HTMLInputElement>(null!);
    const passwordRef = useRef<HTMLInputElement>(null!);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(e);
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
                    <form onSubmit={(e) => {
                        handleLogin(e);
                    }}>
                        <FormControl>
                            <Text>ユーザID</Text>
                            <Input type='hidden' name='login' />
                            <Input
                                ref={userIdRef}
                                placeholder='User ID'
                                type='text'
                                name='userId'
                                />
                            <Text>パスワード</Text>
                            <Input
                                ref={passwordRef}
                                placeholder='Password'
                                type='password'
                                name='password'
                                />
                            <Button type='submit'>ログイン</Button>
                        </FormControl>
                    </form>
                </Stack>
            </Center>
        </>
    );
};
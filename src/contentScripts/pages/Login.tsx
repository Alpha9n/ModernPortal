import { useRef } from 'react';
import { login as loginToCampusmate } from '../api/wrapper';
import { Header } from '../components/Header';
import { Box, Stack, Center, Input, Button, FormControl, useColorModeValue, FormLabel } from '@chakra-ui/react';
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
                            <FormLabel
                                mt={'2'}
                                htmlFor='userId'
                            >ユーザID</FormLabel>
                            <Input
                                ref={userIdRef}
                                placeholder='User ID'
                                type='text'
                                name='userId'
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel
                                mt={'2'}
                                htmlFor='password'
                            >パスワード</FormLabel>
                            <Input
                                ref={passwordRef}
                                placeholder='Password'
                                type='password'
                                name='password'
                            />
                        </FormControl>
                        <Button
                            type='submit'
                            mt={'4'}
                            colorScheme='blue'
                        >
                            ログイン
                        </Button>
                    </form>
                </Stack>
            </Center>
        </>
    );
};

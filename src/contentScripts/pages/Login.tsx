import { handleLogin } from '../apiWrapper';
import { Header } from '../components/Header';
import { Stack, Center, Input, Text, Button, FormControl } from '@chakra-ui/react';
interface LoginProps {
    title: string;
    topPageURL: string;
}

export const Login = ({ title, topPageURL }: LoginProps) => {
    return (
        <>
            <Header title={title} topPageURL={topPageURL} />
            <Center
                m={'2rem auto'}
                w={'50%'}>
                <Stack>
                    <form onSubmit={async (e) => {
                        await handleLogin(e);
                    }}>
                        <FormControl>
                            <Text>ユーザID</Text>
                            <Input type='hidden' name='login' />
                            <Input
                                placeholder='User ID'
                                type='text'
                                name='userId'
                                />
                            <Text>パスワード</Text>
                            <Input
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
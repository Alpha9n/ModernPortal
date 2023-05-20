import { Header } from '../components/Header';
import { Stack, Center, Input, Text, Button } from '@chakra-ui/react';
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
                    <Text>ユーザID</Text>
                    <Input
                        placeholder='User ID'
                        type='text'
                    />
                    <Text>パスワード</Text>
                    <Input
                        placeholder='Password'
                        type='password'
                    />
                    <Button>ログイン</Button>
                </Stack>
            </Center>
        </>
    );
};
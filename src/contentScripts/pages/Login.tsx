import { useRef, useState } from 'react';
import { login as loginToCampusmate } from '../api/wrapper';
import { Header } from '../components/Header';
import { Box, Stack, Input, Button, FormControl, useColorModeValue, Heading, FormLabel } from '@chakra-ui/react';
interface LoginProps {
    title: string;
    topPageURL: string;
}

export const Login = ({ title, topPageURL }: LoginProps) => {
    const userIdRef = useRef<HTMLInputElement>(null!);
    const passwordRef = useRef<HTMLInputElement>(null!);

    const [isLoading, setLoading] = useState<boolean>(false);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        loginToCampusmate(userIdRef.current.value, passwordRef.current.value)
            .then((ok) => {
                if (!ok) setLoading(false);
            }).catch(() => {
                setLoading(false);
            });
    }

    return (
        <Box
            minH={'100vh'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            < Header title={title} topPageURL={topPageURL} />
            <Stack
                mx={'auto'}
                px={'6'}
                py={'12'}
                maxW={'lg'}
                spacing={8}>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <Heading
                            textAlign={'center'}>
                            ログイン
                        </Heading>
                        <Box
                            width={'100%'}>
                            <form
                                name='loginFrom'
                                method='post'
                                action='/portal/login.do'
                                onSubmit={(e) => handleLogin(e)}>
                                <Input type='hidden' name='login' />
                                <Stack spacing={'3'}>
                                    <FormControl>
                                        <FormLabel mt={'2'}>ユーザID</FormLabel>
                                        <Input
                                            ref={userIdRef}
                                            placeholder='User ID'
                                            type='text'
                                            name='userId'
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel mt={'2'}>パスワード</FormLabel>
                                        <Input
                                            ref={passwordRef}
                                            placeholder='Password'
                                            type='password'
                                            name='password'
                                        />
                                    </FormControl>
                                </Stack>
                                <Button
                                    type='submit'
                                    mt={'10'}
                                    colorScheme='blue'
                                    isLoading={isLoading}>
                                    ログイン
                                </Button>
                            </form>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box >
    );
};

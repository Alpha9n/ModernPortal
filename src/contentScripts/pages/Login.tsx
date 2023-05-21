import { handleLogin } from '../apiWrapper';
import { Header } from '../components/Header';
import { Box, Stack, Center, Input, Button, FormControl, useColorModeValue, FormLabel } from '@chakra-ui/react';
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
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack>
                        <form onSubmit={async (e) => {
                            await handleLogin(e);
                        }}>
                            <FormControl>
                                <FormLabel
                                    mt={'2'}
                                    htmlFor='userId'
                                >
                                    ユーザーID
                                </FormLabel>
                                <Input
                                    type='hidden'
                                    name='login'
                                />
                                <Input
                                    placeholder='User ID'
                                    type='text'
                                    name='userId'
                                />
                                <FormLabel
                                    mt={'2'}
                                    htmlFor='password'
                                >
                                    パスワード
                                </FormLabel>
                                <Input
                                    placeholder='Password'
                                    type='password'
                                    name='password'
                                />
                                <Button
                                    type='submit'
                                    mt={'4'}
                                    colorScheme='blue'
                                >
                                    ログイン
                                </Button>
                            </FormControl>
                        </form>
                    </Stack>
                </Box>
            </Center>
        </>
    );
};
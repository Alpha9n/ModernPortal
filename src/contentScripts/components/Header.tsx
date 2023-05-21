import { Box, Button, Flex, useBreakpointValue, useColorModeValue, IconButton, Link, Input } from "@chakra-ui/react";
import { IoNotifications } from "react-icons/io5";
import { handleLogout } from "../apiWrapper";
interface HeaderProps {
    title: string
    topPageURL: string
    isLogin?: boolean
}

export const Header = ({ title, topPageURL, isLogin = false }: HeaderProps): JSX.Element => {
    let signButtonLabel = isLogin ? 'ログアウト' : 'ログイン'

    const SignButton = (): JSX.Element => {
        const buttonH = '10';
        const buttonW = '30';
        return isLogin ? (
            <Button
                h={buttonH}
                w={buttonW}
                onClick={async () => {
                    await handleLogout();
                }}>
                {signButtonLabel}
            </Button>
        ) : (
            <Button
                h={buttonH}
                w={buttonW}
                onClick={() => { open('https://portal.nkz.ac.jp/portal/login.do', '_self') }}>
                {signButtonLabel}
            </Button>
        )
    };

    return (
        <Box
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}>
            <Flex
                maxW={'1200px'}
                align={'center'}
                justifyContent={'space-between'}
                m={'0 auto'}>
                <Button
                    textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                    color={useColorModeValue('gray.800', 'white')}
                    colorScheme='white'
                    onClick={() => { open(topPageURL, '_self') }}>
                    {title}
                </Button>
                <Flex
                    justify={'flex-end'}>
                    <IconButton
                        aria-label={'notification'}
                        icon={<IoNotifications />}
                        marginRight={'4'}>
                    </IconButton>
                    <SignButton />
                </Flex>
            </Flex>
        </Box>
    );
} 
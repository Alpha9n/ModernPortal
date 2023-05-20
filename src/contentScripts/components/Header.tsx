import { Box, Button, Flex, Stack, useBreakpointValue, useColorModeValue, IconButton } from "@chakra-ui/react";
import { IoNotifications } from "react-icons/io5";
interface HeaderProps {
    title: string
    topPageURL: string
    isLogin?: boolean
}

export const Header = ({ title, topPageURL, isLogin = false }: HeaderProps) => {
    let signButtonLabel = 'ログイン'

    if (isLogin) {
        signButtonLabel = 'ログアウト'
    }

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
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}>
                    <IconButton
                        aria-label={'notification'}
                        icon={<IoNotifications />}
                        marginRight={'4'}>
                    </IconButton>
                    <Button>
                        {signButtonLabel}
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
} 
import {
    Box,
    Button,
    Flex,
    useBreakpointValue,
    useColorModeValue,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuGroup,
    MenuItem,
    MenuDivider,
    UnorderedList,
    ListItem
} from '@chakra-ui/react';
import { IoNotifications } from 'react-icons/io5';
import { FaUser, FaExternalLinkAlt, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';
import { handleLogout } from '../api/wrapper';
import { getLoginData } from '../utils/scraper';
import { useMemo } from 'react';
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

        if (isLogin) {
            const loginData = useMemo(() => getLoginData(), []);
            return (
            <Flex>
                <Menu>
                    <MenuButton as={Button} w={buttonW} h={buttonH}>
                        <FaUser />
                    </MenuButton>
                    <MenuList>
                        <MenuGroup title='ユーザー'>
                            <Box pl={'1em'} w={'fit-content'}>
                                <UnorderedList>
                                    <ListItem fontSize={'2xl'}>{loginData.studentName}</ListItem>
                                    <ListItem fontSize={'sm'}>{loginData.studentNumber}</ListItem>
                                </UnorderedList>
                            </Box>
                        </MenuGroup>
                        <MenuGroup title={'前回ログイン日時'}>
                            <Box pl={'1em'} w={'fit-content'}>
                                <UnorderedList>
                                    <ListItem
                                        fontSize={'sm'}>
                                            <time
                                                title={loginData.lastLogin.toFormat('yyyy年LL月dd日 HH時mm分')}
                                                dateTime={loginData.lastLogin.toString()}
                                            >
                                                {loginData.lastLogin.toRelative({locale: 'ja'})}
                                            </time>
                                    </ListItem>
                                </UnorderedList>
                            </Box>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title='ヘルプ'>
                            <MenuItem 
                                icon={<FaExternalLinkAlt />}
                                isDisabled={true}>
                                FAQ
                            </MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup>
                            <MenuItem
                                icon={<FaSignOutAlt />}
                                onClick={async () => {
                                    await handleLogout();
                                }}>
                                ログアウト
                            </MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            </Flex>
            )
        } else {
            return (
                <Button
                    leftIcon={<FaSignInAlt />}
                    h={buttonH}
                    w={buttonW}
                    onClick={() => { open('https://portal.nkz.ac.jp/portal/login.do', '_self') }}>
                    {signButtonLabel}
                </Button>
            )
        }
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
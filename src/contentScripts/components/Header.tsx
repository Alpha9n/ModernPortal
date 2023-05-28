import { 
    Box, 
    Button, 
    Flex, 
    useBreakpointValue, 
    useColorModeValue, 
    IconButton, 
    Link, 
    Input, 
    useToast, 
    Menu,
    MenuButton,
    MenuList,
    MenuGroup,
    MenuItem,
    MenuDivider,
    Heading,
    UnorderedList,
    ListItem} from '@chakra-ui/react';
import { IoNotifications } from 'react-icons/io5';
import { FaUser, FaExternalLinkAlt, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';
import { handleLogout } from '../api/wrapper';
import { getLoginData } from '../utils/scraper';
interface HeaderProps {
    title: string
    topPageURL: string
    isLogin?: boolean

}

export const Header = ({ title, topPageURL, isLogin = false }: HeaderProps): JSX.Element => {
    let signButtonLabel = isLogin ? 'ログアウト' : 'ログイン'

    const loginData = getLoginData();

    const SignButton = (): JSX.Element => {
        const buttonH = '10';
        const buttonW = '30';

        return isLogin ? (
            <Flex>
                <Menu>
                    <MenuButton as={Button} w={buttonW} h={buttonH}>
                        <FaUser/>
                    </MenuButton>
                    <MenuList>
                        <MenuGroup title='ユーザー'>
                            <Box m={'0 auto'} w={'fit-content'}>
                                <UnorderedList>
                                    <ListItem fontSize={'2xl'}>{loginData.studentName}</ListItem>
                                    <ListItem fontSize={'sm'}>{loginData.studentNumber}</ListItem>
                                    <ListItem fontSize={'sm'}>{loginData.lastLogin.toFormat('yyyy年LL月dd日 HH時mm分')}</ListItem>
                                </UnorderedList>
                            </Box>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title='ヘルプ'>
                            <MenuItem icon={<FaExternalLinkAlt/>}>FAQ</MenuItem>
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
        ) : (
            <Button
                leftIcon={<FaSignInAlt/>}
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
import './App.css';
import { Heading, Select, Button, Box, Divider, Text, useColorMode } from '@chakra-ui/react';
import { ThemeTypes, isThemeValue, setTheme } from './Utils';
import { FaExternalLinkAlt } from "react-icons/fa";

const App = () => {

  const portalLink = 'https://portal.nkz.ac.jp/portal/login.do';
  const { colorMode, toggleColorMode } = useColorMode();

  const openLink = (link: string) => {
    chrome.tabs.create({ url: link });
  };

  const themeSelect = (value: string) => {
    let theme = isThemeValue(value) ? value : 'OS';
    setTheme(theme);
    changeTheme(theme);
  };

  const changeTheme = (value: ThemeTypes) => {
    if (value === 'dark' && colorMode === 'light') {
      toggleColorMode();
    } else if (value === 'light' && colorMode === 'dark') {
      toggleColorMode();
    }
  }

  return (
    <Box margin={['0', 'auto']}>
      <Heading size='lg' m={2}>Modern Portal</Heading>

      <Divider />

      <Box padding={2} alignItems={'center'}>
        <Box my={4}>
          <Text fontSize={'xl'} textAlign={'left'}>Theme</Text>
          <Select onChange={(e) => themeSelect(e.target.value)} justifyContent={'space-between'} mx={'auto'} w={'100%'}>
            <option value='dark'>Dark</option>
            <option value='light'>Light</option>
            <option value='OS'>OS Setting</option>
          </Select >
        </Box>

        <Box marginBottom={4} justifyContent={'space-between'}>
          <Button leftIcon={<FaExternalLinkAlt />} colorScheme='blue' onClick={() => openLink(portalLink)} w={'100%'}>Portal</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default App;

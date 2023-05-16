import './App.css';
import { Heading, Select, Button } from '@chakra-ui/react';
import { getTheme, isThemeValue, setTheme } from './Utils';

function App() {
  const portalLink = 'https://portal.nkz.ac.jp/portal/login.do';
  const currentTheme = getTheme();

  const openLink = (link: string) => {
    chrome.tabs.create({ url: link });
  };

  const themeSelect = (value: string) => {
    isThemeValue(value) ? setTheme(value) : null;
  };

  return (
    <>
      <Heading>Modern Portal</Heading>
      <Button colorScheme='blue' onClick={() => openLink(portalLink)}>Portal</Button>
      <Select placeholder={currentTheme} onChange={(e) => themeSelect(e.target.value)}>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
        <option value='OS'>OS Setting</option>
      </Select >
    </>
  );
};

export default App;

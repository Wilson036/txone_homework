import { Flex, Icon, useColorMode, useColorStyle } from '@tonic-ui/react';
import React from 'react';
import { styled } from 'styled-components';
import MyMenu from './components/MyMenu';
import { TMenuItem } from './model';
type ThemeColorModes = 'light' | 'dark';
const nextColorMode: Record<ThemeColorModes, ThemeColorModes> = {
  dark: 'light',
  light: 'dark',
};

const userMenu: TMenuItem[] = [
  {
    icon: 'settings',
    text: 'Settings',
    value: 'settings',
  },
  {
    icon: 'user-team',
    text: 'Accounts',
    value: 'userTeam',
  },
  {
    icon: 'lock',
    text: 'Privacy control',
    value: 'privacyControl',
  },
];
const App: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [colorStyle] = useColorStyle({ colorMode }) as any;

  return (
    <Container
      backgroundColor={colorStyle.background.secondary}
      color={colorStyle.color.primary}
      flexDirection="column"
    >
      <Flex justifyContent={'space-between'}>
        <h1>TXOne</h1>
        <SwitchWrapper
          onClick={() => {
            setColorMode(nextColorMode[colorMode]);
          }}
        >
          {colorMode === 'dark' ? <Icon icon="sun-o" /> : <Icon icon="moon" />}
        </SwitchWrapper>
      </Flex>
      <Flex height="inherit" alignItems="center" justifyContent="center">
        <MyMenu menuItems={userMenu} />
      </Flex>
    </Container>
  );
};

export default App;

const Container = styled(Flex)`
  width: 100vw;
  height: 100vh;
  padding: 12px;
`;

const SwitchWrapper = styled.span`
  cursor: pointer;
`;

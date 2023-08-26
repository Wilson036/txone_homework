import React from 'react';
import {
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Icon,
  Text,
  Flex,
} from '@tonic-ui/react';
import { useToggle } from '@tonic-ui/react-hooks';
import { TMenuItem } from '../model';
const MyMenu: React.FC<{ menuItems: TMenuItem[] }> = ({ menuItems }) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const onClose = () => toggleIsOpen(false);
  return (
    <Flex columnGap="4x" alignItems="center">
      <Menu isOpen={isOpen} onClose={onClose}>
        <MenuButton aria-label="menu-button" onClick={toggleIsOpen}>
          <Icon icon="menu" mr="2x" />
        </MenuButton>
        <MenuList width="max-content">
          {menuItems.map(({ value, icon, text }) => (
            <MenuItem key={value}>
              <Icon aria-label={`icon-${icon}`} icon={icon} mr="2x" />
              <Text>{text}</Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default MyMenu;

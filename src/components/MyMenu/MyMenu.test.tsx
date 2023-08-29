import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import MyMenu from './index';
import { TonicProvider } from '@tonic-ui/react';

describe('MyMenu', () => {
  const mockMenuItems = [
    { value: '1', icon: 'home', text: 'Home' },
    { value: '2', icon: 'settings', text: 'Settings' },
  ];

  it('renders menu button', () => {
    render(
      <TonicProvider
        colorMode={{
          defaultValue: 'light',
        }}
      >
        <MyMenu menuItems={mockMenuItems} />
      </TonicProvider>
    );
    const menuButton = screen.getByLabelText('menu-button');
    expect(menuButton).toBeInTheDocument();
  });

  it('displays menu items when menu button is clicked', () => {
    render(
      <TonicProvider
        colorMode={{
          defaultValue: 'light',
        }}
      >
        <MyMenu menuItems={mockMenuItems} />
      </TonicProvider>
    );
    const menuButton = screen.getByLabelText('menu-button');
    fireEvent.click(menuButton);

    const homeItem = screen.getByText('Home');
    const settingsItem = screen.getByText('Settings');
    const homeIcon = screen.getByLabelText(`icon-home`);
    const settingsIcon = screen.getByLabelText(`icon-settings`);
    expect(homeItem).toBeInTheDocument();
    expect(settingsItem).toBeInTheDocument();
    expect(homeIcon).toBeInTheDocument();
    expect(settingsIcon).toBeInTheDocument();
  });

  it('closes the menu when clicked', () => {
    render(
      <TonicProvider
        colorMode={{
          defaultValue: 'light',
        }}
      >
        <MyMenu menuItems={mockMenuItems} />
      </TonicProvider>
    );

    const menuButton = screen.getByLabelText('menu-button');
    userEvent.click(menuButton);

    const homeItem = screen.getByText('Home');
    expect(homeItem).toBeInTheDocument();

    userEvent.click(menuButton);
    expect(homeItem).not.toBeVisible();
  });
});

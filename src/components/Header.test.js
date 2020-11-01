import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { LoggedIn, LoggedOut } from './Header.stories';

it('renders the header in the logged in state', () => {
  const handleLogout = jest.fn();
  const handleLogin = jest.fn();
  const handleCreateAccount = jest.fn();

  render(
    <LoggedIn
      {...LoggedIn.args}
      onLogin={handleLogin}
      onLogout={handleLogout}
      onCreateAccount={handleCreateAccount}
    />
  );

  fireEvent.click(screen.getByText(/Log out/i));
  expect(handleLogout).toHaveBeenCalledTimes(1);
});

it('renders the header in the logged out state', () => {
  const handleLogout = jest.fn();
  const handleLogin = jest.fn();
  const handleCreateAccount = jest.fn();

  render(
    <LoggedOut
      {...LoggedOut.args}
      onLogin={handleLogin}
      onLogout={handleLogout}
      onCreateAccount={handleCreateAccount}
    />
  );

  fireEvent.click(screen.getByText(/Log in/i));
  expect(handleLogin).toHaveBeenCalledTimes(1);
});

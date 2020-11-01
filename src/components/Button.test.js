import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Primary, Secondary, Large } from './Button.stories';

it('renders the button in the primary state', () => {
  render(<Primary {...Primary.args} />);
  expect(screen.getByRole('button')).toHaveTextContent(Primary.args.label);
});

it('renders the button in the secondary state', () => {
  render(<Secondary {...Secondary.args} />);
  expect(screen.getByRole('button')).toHaveTextContent(Secondary.args.label);
});

it('renders the button in the large state', () => {
  render(<Large {...Large.args} />);
  expect(screen.getByRole('button')).toHaveTextContent(Large.args.label);
});

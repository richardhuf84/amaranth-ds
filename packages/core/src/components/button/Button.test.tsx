import { expect, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Button } from './Button';

test('Button renders correctly', () => {
  render(<Button>A button</Button>);

  expect(screen.getByText('A button')).toBeDefined();
});

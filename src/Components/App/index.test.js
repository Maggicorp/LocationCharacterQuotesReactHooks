import React from 'react';
import { render } from '@testing-library/react';
import { TITLE_TEXT } from '../../Constants/text.js';

import App from '.';

test('renders app header component', () => {
  const { getByText } = render(<App />);
  const header = getByText(TITLE_TEXT);
  expect(header).toBeInTheDocument();
});

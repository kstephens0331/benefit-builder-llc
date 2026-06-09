import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from '../pages/NotFound';

describe('NotFound page', () => {
  it('renders 404 heading and home link', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText('404')).toBeTruthy();
    expect(screen.getByText('Back to Home')).toBeTruthy();
  });
});

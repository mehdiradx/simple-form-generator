import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '~/components';

describe('Header', () => {
  it('Render Title', () => {
    render(<Header />);
    const title = screen.getByRole('heading', {
      name: /form generator/i,
    });
    expect(title).toBeInTheDocument();
  });

  it('Render Subtitle', () => {
    render(<Header />);
    const subtitle = screen.getByText(
      /a form generator module using react and the specified libraries and tools\./i,
    );
    expect(subtitle).toBeInTheDocument();
  });
});

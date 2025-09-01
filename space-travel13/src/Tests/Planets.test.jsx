import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SpacecraftProvider } from '../context/SpacecraftContext';
import Planets from '../pages/Planets';

describe('Planets Page', () => {
  const renderWithProvider = () => {
    render(
      <SpacecraftProvider>
        <MemoryRouter>
          <Planets />
        </MemoryRouter>
      </SpacecraftProvider>
    );
  };

it('renders without crashing', () => {
    renderWithProvider();
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
    });
});

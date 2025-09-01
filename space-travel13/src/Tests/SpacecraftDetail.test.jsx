import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { SpacecraftProvider } from '../context/SpacecraftContext';
import SpacecraftDetail from '../pages/SpacecraftDetail';

describe('SpacecraftDetail Page', () => {
  const renderWithRouter = (id) => {
    render(
      <SpacecraftProvider>
        <MemoryRouter initialEntries={[`/spacecrafts/${id}`]}>
          <Routes>
            <Route path="/spacecrafts/:id" element={<SpacecraftDetail />} />
          </Routes>
        </MemoryRouter>
      </SpacecraftProvider>
    );
  };

 it('renders valid spacecraft', () => {
  renderWithRouter(1); // Assuming 1 is a valid ID
  expect(screen.getByRole('heading',{ name: /Enterprise/i })).toBeInTheDocument();

 });

 it('renders not found for invalid spacecraft', () => {
  renderWithRouter(999); // Assuming 999 is an invalid ID
  expect(screen.getByRole('heading',{ name: /Spacecraft Not Found/i })).toBeInTheDocument();
 });
});

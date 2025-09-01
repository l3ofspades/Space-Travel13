import '../Tests/setupTests';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpacecraftProvider } from '../context/SpacecraftContext';
import SpacecraftDetail from '../pages/SpacecraftDetail';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

describe('SpacecraftDetail Page', () => {
  const renderWithRouter = (spacecraftId) => {
    render(
      <SpacecraftProvider>
        <MemoryRouter initialEntries={[`/spacecrafts/${spacecraftId}`]}>
          <Routes>
            <Route path="/spacecrafts/:id" element={<SpacecraftDetail />} />
          </Routes>
        </MemoryRouter>
      </SpacecraftProvider>
    );
  };

  it('renders spacecraft details', () => {
    renderWithRouter(1); // Enterprise
    expect(screen.getByText(/Enterprise/i)).toBeInTheDocument();
    expect(screen.getByText(/Current Location:/i)).toBeInTheDocument();
    expect(screen.getByText(/\[INFO\] Spacecraft initialized/i)).toBeInTheDocument();
  });

  it('shows not found message for invalid ID', () => {
    renderWithRouter(999);
    expect(screen.getByText(/Spacecraft Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/Back to Spacecrafts/i)).toBeInTheDocument();
  });
});

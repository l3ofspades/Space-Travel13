import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { SpacecraftProvider } from '../context/SpacecraftContext';
import Spacecrafts from '../pages/Spacecrafts';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

describe('Spacecrafts Page', () => {
  const renderPage = () => {
    render(
      <SpacecraftProvider>
        <MemoryRouter>
          <Spacecrafts />
        </MemoryRouter>
      </SpacecraftProvider>
    );
  };

  it('renders initial spacecrafts', async () => {
    renderPage();
    expect(await screen.findByText(/Enterprise/i)).toBeInTheDocument();
    expect(await screen.findByText(/Discovery/i)).toBeInTheDocument();
  });

  it('adds a new spacecraft', async () => {
    renderPage();
    const nameInput = await screen.findByPlaceholderText('Name');
    const capacityInput = await screen.findByPlaceholderText('Capacity');
    const statusSelect = screen.getByDisplayValue('Operational');
    const planetSelect = screen.getByDisplayValue('Earth');

    fireEvent.change(nameInput, { target: { value: 'Voyager' } });
    fireEvent.change(capacityInput, { target: { value: 10 } });
    fireEvent.change(statusSelect, { target: { value: 'Operational' } });
    fireEvent.change(planetSelect, { target: { value: 'Mars' } });

    const addButton = screen.getByText('Add Spacecraft');
    fireEvent.click(addButton);

    expect(await screen.findByText(/Voyager/i)).toBeInTheDocument();
  });

  it('decommissions a spacecraft', async () => {
    renderPage();

    // Find the card for Enterprise
    const enterpriseCard = await screen.findByText('Enterprise').then(el => el.closest('.card'));

    // Find the Decommission button inside that card
    const decommissionButton = within(enterpriseCard).getByText('Decommission');

    fireEvent.click(decommissionButton);

    // Check that Enterprise is no longer in the document
    expect(screen.queryByText(/Enterprise/i)).not.toBeInTheDocument();
  });
});

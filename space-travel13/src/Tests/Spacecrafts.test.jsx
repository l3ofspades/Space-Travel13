import '.../Tests/setupTests';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Voyager' } });
    fireEvent.change(screen.getByPlaceholderText('Capacity'), { target: { value: 10 } });
    fireEvent.change(screen.getByDisplayValue('Operational'), { target: { value: 'Operational' } });
    fireEvent.change(screen.getByDisplayValue('Earth'), { target: { value: 'Mars' } });

    fireEvent.click(screen.getByText('Add Spacecraft'));

    expect(await screen.findByText(/Voyager/i)).toBeInTheDocument();
    expect(screen.getByText(/Capacity: 10/i)).toBeInTheDocument();
    expect(screen.getByText(/Location: Mars/i)).toBeInTheDocument();
  });

  it('decommissions a spacecraft', async () => {
    renderPage();

    const decommissionButtons = await screen.findAllByText(/Decommission/i);
    fireEvent.click(decommissionButtons[0]); // remove Enterprise

    expect(screen.queryByText(/Enterprise/i)).toBeNull();
  });
});

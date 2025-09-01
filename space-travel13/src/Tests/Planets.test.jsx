
import { render, screen, fireEvent } from '@testing-library/react';
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

    it('renders planet cards', () => {
        renderWithProvider();
        expect(screen.getByText(/Earth/i)).toBeInTheDocument();
        expect(screen.getByText(/Mars/i)).toBeInTheDocument();
    });

    it('shows spacecraft under correct planets', () => {
        renderWithProvider();
        expect(screen.getByText(/Enterprise/i)).toBeInTheDocument();
        expect(screen.getByText(/Discovery/i)).toBeInTheDocument();
        
    });

    it('moves spacecraft to a different planet', () => {
        renderWithProvider();

        const enterpriseButton = screen.getByText('Send to Mars');
        fireEvent.click(enterpriseButton);

        const marsCard = screen.getByText('Mars').closest('div');
        expect(within(marsCard).getByText(/Enterprise/i)).toBeInTheDocument();
    });
});
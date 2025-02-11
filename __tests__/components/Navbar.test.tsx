import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { waitFor } from '@testing-library/react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../../app/components/Navbar';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

// Mock next/router and next/navigation
vi.mock('next/navigation', () => ({
    usePathname: vi.fn(),
}));

// Mock react-i18next
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('Navbar', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    })
    
    it('renders the navbar with the correct translations', () => {
        render(<Navbar />);
        expect(screen.getByText('appname')).toBeInTheDocument();
        expect(screen.getByText('home')).toBeInTheDocument();
        expect(screen.getByText('about')).toBeInTheDocument();
        expect(screen.getByText('workouts')).toBeInTheDocument();
        expect(screen.getByText('language')).toBeInTheDocument();
    });

    it('toggles mobile menu visibility when clicking the hamburger icon', () => {
        render(<Navbar />);
        const hamburgerIcon = screen.getByTestId('mobile-menu-icon');
        
        // Check if the mobile menu is displayed
        expect(screen.queryByTestId('home')).not.toBeInTheDocument();
        expect(screen.queryByTestId('about')).not.toBeInTheDocument();
        expect(screen.queryByTestId('workouts')).not.toBeInTheDocument();
        expect(screen.queryByTestId('language')).not.toBeInTheDocument();

        // Click again to hide the mobile menu
        fireEvent.click(hamburgerIcon);
        expect(screen.getByTestId('home')).toBeInTheDocument();
    });

    it('shows user dropdown when hovering over user icon', () => {
        render(<Navbar />);

        // Hover over the user icon (FontAwesome User)
        const userIcon = screen.getByTestId('user-icon');
        fireEvent.mouseEnter(userIcon);
        expect(screen.getByText('login')).toBeInTheDocument();
        expect(screen.getByText('register')).toBeInTheDocument();
    });

    it('hides user dropdown when mouse leaves the user icon', async () => {
        render(<Navbar />);
        const userIcon = screen.getByTestId('user-icon');
        fireEvent.mouseEnter(userIcon);

        // Check if the dropdown menu is visible
        expect(screen.getByTestId('login-button')).toBeInTheDocument();

        // Move mouse away to hide the dropdown
        fireEvent.mouseLeave(userIcon);

        // Check to see if the dropdown is hidden
        await waitFor(() => expect(screen.queryByTestId("login-button")).not.toBeInTheDocument());
        //expect(getComputedStyle(screen.getByTestId('login-button')).display).toBe('none');
    });

    it('closes mobile menu and user dropdown when pathname changes', () => {
        (usePathname as jest.Mock).mockReturnValue('/');
        const { rerender } = render(<Navbar />);

        const userIcon = screen.getByTestId('user-icon');
        fireEvent.mouseEnter(userIcon);

        expect(screen.getByTestId('login-button')).toBeInTheDocument();
        expect(screen.getByTestId('register-button')).toBeInTheDocument();

        fireEvent.mouseLeave(userIcon);

        // Simulate pathname change
        (usePathname as jest.Mock).mockReturnValue('/about');

        // Rerender the navbar
        rerender(<Navbar />)
        expect(screen.queryByTestId('login-button')).not.toBeInTheDocument();
        expect(screen.queryByTestId('register-button')).not.toBeInTheDocument();     
    });
});
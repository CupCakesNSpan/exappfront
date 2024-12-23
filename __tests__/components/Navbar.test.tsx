import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../../app/components/Navbar';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

// Mock next/router and next/navigation
jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

// Mock react-i18next
jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('Navbar', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })
    
    it('renders the navbar with the correct translations', () => {
        render(<Navbar />);
        expect(screen.getByText('appname')).toBeInTheDocument();
        expect(screen.getByText('home')).toBeInTheDocument();
        expect(screen.getByText('about')).toBeInTheDocument();
        expect(screen.getByText('workouts')).toBeInTheDocument();
        expect(screen.getByText('language')).toBeInTheDocument();
        expect(screen.getByText('login')).toBeInTheDocument();
        expect(screen.getByText('register')).toBeInTheDocument();
    });

    it('toggles mobile menu visibility when clicking the hamburger icon', () => {
        render(<Navbar />);
        const hamburgerIcon = screen.getByTestId('mobile-menu-icon');
        fireEvent.click(hamburgerIcon);
        // Check if the mobile menu is displayed
        expect(screen.getByTestId('home')).toBeInTheDocument();
        expect(screen.getByTestId('about')).toBeInTheDocument();
        expect(screen.getByTestId('workouts')).toBeInTheDocument();
        expect(screen.getByTestId('language')).toBeInTheDocument();

        // Click again to hide the mobile menu
        fireEvent.click(hamburgerIcon);
        expect(screen.queryByTestId('home')).not.toBeInTheDocument();
    });

    it('shows user dropdown when hovering over user icon', () => {
        render(<Navbar />);

        // Hover over the user icon (FontAwesome User)
        const userIcon = screen.getByTestId('user-icon');
        fireEvent.mouseEnter(userIcon);
        expect(screen.getByText('login')).toBeInTheDocument();
        expect(screen.getByText('register')).toBeInTheDocument();
    });

    it('hides user dropdown when mouse leaves the user icon', () => {
        render(<Navbar />);
        const userIcon = screen.getByTestId('user-icon');
        fireEvent.mouseEnter(userIcon);

        // Check if the dropdown menu is visible
        expect(screen.getByTestId('login-button')).toBeInTheDocument();

        // Move mouse away to hide the dropdown
        fireEvent.mouseLeave(userIcon);

        // Check to see if the dropdown is hidden
        expect(screen.queryByTestId('login-button')).not.toBeInTheDocument();
    });

    it('closes mobile menu and user dropdown when pathname changes', () => {
        (usePathname as jest.Mock).mockReturnValue('/');
        render(<Navbar />);
        // Hover over the user icon
        const userIcon = screen.getByTestId('user-icon');
        fireEvent.mouseEnter(userIcon);
        expect(screen.getByTestId('login-button')).toBeInTheDocument();
        expect(screen.getByTestId('register-button')).toBeInTheDocument();
        fireEvent.mouseLeave(userIcon);

        // Change the path name to about
        (usePathname as jest.Mock).mockReturnValue('/about');
        render(<Navbar />);
        fireEvent.mouseEnter(userIcon);
        expect(screen.queryByTestId('login-button')).not.toBeInTheDocument();
        expect(screen.queryByTestId('register-button')).not.toBeInTheDocument();
    })
})
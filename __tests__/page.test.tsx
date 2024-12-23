import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { useTranslation } from 'react-i18next';
import { authOnAppLoad } from '@services/auth';
import Image from 'next/image';

// Mock translations
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ 
        t: (key: string) => key,
    }),
}));

// Mock auth service
jest.mock('@/services/auth', () => ({
    authOnAppLoad: jest.fn(),
}));

// Mock next/image
jest.mock('next/image', () => (props: any) => <img { ...props } />);

describe('Home', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the component successfully', () => {
        render(<Home />);

        // Check if static text and translated keys are rendered
        expect(screen.getByText('welcome')).toBeInTheDocument();
        expect(screen.getByText('introHeader')).toBeInTheDocument();
        expect(screen.getByText('introDetails')).toBeInTheDocument();
        expect(screen.getByText('descriptionTitle')).toBeInTheDocument();
        expect(screen.getByText('descriptionDetails')).toBeInTheDocument();
        expect(screen.getByText('featureTitle')).toBeInTheDocument();
        expect(screen.getByText('featureDetails')).toBeInTheDocument();
        expect(screen.getByText('benefitTitle')).toBeInTheDocument();
        expect(screen.getByText('benefitDetails')).toBeInTheDocument();
    });

    it('calls authOnAppLoad on mount', () => {
        render(<Home />);
        expect(authOnAppLoad).toHaveBeenCalledTimes(1);
    });

    it('renders images correctly', () => {
        render(<Home />);
        expect(screen.getByAltText('Woman doing ab crunch')).toBeInTheDocument();
        expect(screen.getByAltText('A man running')).toBeInTheDocument();
        expect(screen.getByAltText('A smartphone being held')).toBeInTheDocument();
        expect(screen.getByAltText('Two hands joined in celebration')).toBeInTheDocument();
    });
});
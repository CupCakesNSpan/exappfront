import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../../app/components/Footer';
import { useTranslation } from 'react-i18next';

// Mock react-i18next
// jest.mock('react-i18next', () => ({
//     useTranslation: () => ({
//         t: (key: string) => key,
//     }),
// }));
jest.mock('react-i18next', () => ({
    useTranslation: jest.fn(),
  }));

describe('Footer', () => {
    const changeLanguageMock = jest.fn();
    const tMock = jest.fn((key: string) => key);

    beforeEach(() => {
        (useTranslation as jest.Mock).mockReturnValue({ 
            t: tMock, 
            i18n: { changeLanguage: changeLanguageMock } 
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('renders the footer with the correct translations', () => {
        render(<Footer />);
        expect(screen.getByText('CupCakesNSpan')).toBeInTheDocument();
        expect(screen.getByText('tos')).toBeInTheDocument();
        expect(screen.getByText('pp')).toBeInTheDocument();
        expect(screen.getByText('facebook')).toBeInTheDocument();
        expect(screen.getByText('Twitter')).toBeInTheDocument();
        expect(screen.getByText('Instagram')).toBeInTheDocument();
        expect(screen.getByText('Credits')).toBeInTheDocument();
    });

    it('calls the i18n.changeLanguage with "en" when clicking the EN button', () => {
        render(<Footer />);
        const enButton = screen.getByText('EN');
        fireEvent.click(enButton);
        expect(changeLanguageMock).toHaveBeenCalledWith('en');
    });

    it('calls i18n.changeLanguage with "cy" when clicking the CY button', () => {
        render(<Footer />);
        const cyButton = screen.getByText('CY');
        fireEvent.click(cyButton);
        expect(changeLanguageMock).toHaveBeenCalledWith('cy');
    });

    it('calls i18n.changeLanguage with "jp" when clicking the JP button', () => {
        render(<Footer />);
        const jpButton = screen.getByText('JP');
        fireEvent.click(jpButton);
        expect(changeLanguageMock).toHaveBeenCalledWith('jp');
    });
});
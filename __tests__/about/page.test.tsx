import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from '../../app/about/page';

describe('AboutPage', () => {
  it('renders the children content', () => {
    render(
        <AboutPage />
    );

    const headingElement = screen.getByText('Welcome to the about page!');
    expect(headingElement).toBeInTheDocument();
  });
});

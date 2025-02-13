import React from 'react';
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AuthButtons from "../../app/components/AuthButtons";
import userEvent from "@testing-library/user-event";


describe("AuthButtons", () => {

  // Mocking the window.location object to simulate navigation
  beforeAll(() => {
    const mockLocation = { assign: vi.fn() };
    // Mock window.location with a custom object
    Object.defineProperty(window, 'location', { value: mockLocation });
  });

  afterAll(() => {
    // Clean up the mock after all tests
    vi.restoreAllMocks();
  });

  it("renders login and register buttons", () => {
    render(<AuthButtons />);
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  it("redirects to the login page when the login button is clicked", async () => {
    render(<AuthButtons />);
    const loginButton = screen.getByText("Login")
    await userEvent.click(loginButton);
    expect(window.location.assign).toHaveBeenCalledWith("/login");
  });

  it("redirects to the registration page when the register button is clicked", async () => {
    render(<AuthButtons />);
    // Check to clicking the register button redirects to /register
    await userEvent.click(screen.getByText("Register"));
    expect(window.location.assign).toHaveBeenCalledWith("/register");
  });
});

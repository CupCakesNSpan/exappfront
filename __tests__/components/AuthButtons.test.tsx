import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import AuthButtons from "../../app/components/AuthButtons";
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import type { Mock } from 'vitest';

// Mock the next/navigation
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

describe("AuthButtons", () => {
  let mockPush: Mock;

  beforeEach(() => {
    mockPush = vi.fn();
    (useRouter as Mock).mockReturnValue({ push: mockPush });
    render(<AuthButtons />);
  })

  afterEach(() => {
    cleanup();
  })

  it("should render login and register buttons", () => {
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /register/i })).toBeInTheDocument();
  });

  it("redirects to the login page when the login button is clicked", async () => {
    const loginButton = screen.getByRole("button", { name: /login/i });
    await userEvent.click(loginButton);
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/login");
    });
  });

  it("redirects to the registration page when the register button is clicked", async () => {
    const registerButton = screen.getByRole("button", { name: /register/i });
    await userEvent.click(registerButton);
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/register");
    });
  });
});

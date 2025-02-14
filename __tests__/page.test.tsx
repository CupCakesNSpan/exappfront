import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import type { Mock } from 'vitest';
import Home from "./../app/page";
import { useTranslation } from "react-i18next";
import { authOnAppLoad } from "./../services/auth";
import { useRouter } from "next/navigation";
import userEvent from '@testing-library/user-event';

// Mock translations
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// Mock auth service
vi.mock("../services/auth", () => ({
  authOnAppLoad: vi.fn(),
}));

// Mock next/image
//vi.mock("next/image", () => (props: any) => <img {...props} />);

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

describe("Home", () => {
  let mockPush: Mock;

  beforeEach(() => {
    mockPush = vi.fn();
    (useRouter as Mock).mockReturnValue({ push: mockPush });
    render(<Home />);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the component successfully", () => {

    // Check if static text and translated keys are rendered
    expect(screen.getByText("welcome")).toBeInTheDocument();
    expect(screen.getByText("introHeader")).toBeInTheDocument();
    expect(screen.getByText("introDetails")).toBeInTheDocument();
    expect(screen.getByText("descriptionTitle")).toBeInTheDocument();
    expect(screen.getByText("descriptionDetails")).toBeInTheDocument();
    expect(screen.getByText("featureTitle")).toBeInTheDocument();
    expect(screen.getByText("featureDetails")).toBeInTheDocument();
    expect(screen.getByText("benefitTitle")).toBeInTheDocument();
    expect(screen.getByText("benefitDetails")).toBeInTheDocument();
  });

  it("calls authOnAppLoad on mount", async () => {
    await waitFor(() => {
      expect(authOnAppLoad).toHaveBeenCalledTimes(2);
    });
  });

  it("renders images correctly", () => {
    expect(screen.getByAltText("Woman doing ab crunch")).toBeInTheDocument();
    expect(screen.getByAltText("A man running")).toBeInTheDocument();
    expect(screen.getByAltText("A smartphone being held")).toBeInTheDocument();
    expect(
      screen.getByAltText("Two hands joined in celebration")
    ).toBeInTheDocument();
  });

  it("renders login and register buttons", () => {

    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();

    const registerButton = screen.getByRole("button", { name: /register/i });
    expect(registerButton).toBeInTheDocument();
  });

  it("navigates to login page when login button is clicked", async () => {
    const loginButton = screen.getByRole("button", { name: /login/i });
    userEvent.click(loginButton);
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/login");
    })
  });

  it("navigates to register page when register button is clicked", async () => {
    const registerButton = screen.getByRole("button", { name: /register/i });
    userEvent.click(registerButton);
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/register");
    });
  });
});

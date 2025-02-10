import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";
import { useTranslation } from "react-i18next";
import { authOnAppLoad } from "@services/auth";
import Image from "next/image";
import { useRouter } from "next/router";

// Mock translations
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// Mock auth service
jest.mock("@/services/auth", () => ({
  authOnAppLoad: jest.fn(),
}));

// Mock next/image
jest.mock("next/image", () => (props: any) => <img {...props} />);

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Home", () => {
  let pushMock: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
  });

  it("renders the component successfully", () => {
    render(<Home />);

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

  it("calls authOnAppLoad on mount", () => {
    render(<Home />);
    expect(authOnAppLoad).toHaveBeenCalledTimes(1);
  });

  it("renders images correctly", () => {
    render(<Home />);
    expect(screen.getByAltText("Woman doing ab crunch")).toBeInTheDocument();
    expect(screen.getByAltText("A man running")).toBeInTheDocument();
    expect(screen.getByAltText("A smartphone being held")).toBeInTheDocument();
    expect(
      screen.getByAltText("Two hands joined in celebration")
    ).toBeInTheDocument();
  });

  it("renders login and register buttons", () => {
    render(<Home />);

    const loginButton = screen.getByRole("button", { name: /login/ });
    expect(loginButton).toBeInTheDocument();

    const registerButton = screen.getByRole("button", { name: /register/ });
    expect(registerButton).toBeInTheDocument();
  });

  it("navigates to login page when login button is clicked", () => {
    render(<Home />);
    const loginButton = screen.getByRole("button", { name: /login/ });

    fireEvent.click(loginButton);
    expect(pushMock).toHaveBeenCalledWith("/login");
  });

  it("navigates to register page when register button is clicked", () => {
    render(<Home />);
    const registerButton = screen.getByRole("button", { name: /register/ });

    fireEvent.click(registerButton);
    expect(pushMock).toHaveBeenCalledWith("/register");
  });
});

import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import AuthButtons from "@/app/components/AuthButtons";
import { useRouter } from "next/router";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("AuthButtons", () => {
  it("renders login and register buttons", () => {
    render(<AuthButtons />);
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  it("redirects to the login page when the login button is clicked", async () => {
    render(<AuthButtons />);
    // Check to clicking the login button redirects to /login
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    await userEvent.click(screen.getByText("Login"));
    expect(pushMock).toHaveBeenCalledWith("/login");
  });

  it("redirects to the registration page when the register button is clicked", async () => {
    render(<AuthButtons />);
    // Check to clicking the register button redirects to /register
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    await userEvent.click(screen.getByText("Register"));
    expect(pushMock).toHaveBeenCalledWith("/register");
  });
});

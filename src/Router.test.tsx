import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Test router", () => {
  it("main page", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const mainLink = screen.getByText(/main/i);

    fireEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  it("converter page", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const converterLink = screen.getByText(/converter/i);

    fireEvent.click(converterLink);
    expect(screen.getByTestId("converter-page")).toBeInTheDocument();
  });

  it("not found page", () => {
    render(
      <MemoryRouter initialEntries={["/notfound"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});

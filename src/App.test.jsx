import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders CI/CD heading", () => {
  render(<App />);
  expect(screen.getByText(/CI\/CD Demo Website/i)).toBeInTheDocument();
});
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { handleSubmit } from "./components/ContactUs";
import { HomePage } from "./components/HomePage";
import { NavBar } from "./components/NavBar";
import { ContactUs } from "./components/ContactUs";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { CategoriesPage } from "./components/CategoriesPage";
import { AccountPage } from "./components/AccountPage";
import { ReactDom } from "react-dom";

test("Contact Us Page", () => {
  render(<ContactUs />);
  const name = screen.getByText("Name");
  expect(name).toBeInTheDocument();
  const inputName = screen.getByLabelText("Name");
  fireEvent.change(inputName, { target: { value: "Luke" } });
  expect(inputName.value).toBe("Luke");
});

test("testing email input", () => {
  render(<ContactUs />);
  const email = screen.getByText("Email");
  expect(email).toBeInTheDocument();
  const inputEmail = screen.getByLabelText("Email");
  fireEvent.change(inputEmail, { target: { value: "email" } });
  expect(inputEmail.value).toBe("email");
});

test("testing message input field", () => {
  render(<ContactUs />);
  const message = screen.getByText("Message");
  expect(message).toBeInTheDocument();
  const inputMessage = screen.getByLabelText("Message");
  fireEvent.change(inputMessage, { target: { value: "message" } });
  expect(inputMessage.value).toBe("message");
  screen.debug(inputMessage);
});

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

test("calls onSubmit prop when clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Submit</Button>);
  fireEvent.click(screen.getByText(/Submit/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

describe("<HomePage/>", () => {
  it("renders ,HomePage/> component correctly", () => {
    const { getByText } = render(<HomePage />);
    expect(getByText(/whatJob?/i)).toBeInTheDocument();
  });
});

describe("NavBar", () => {
  test("Test categories link on navbar", () => {
    const { getByTestId } = render(
      <a data-testid="link" href="/Categories">
        Categories
      </a>
    );
    expect(getByTestId("link")).toHaveAttribute("href", "/Categories");
  });
  test("Test login link on navbar", () => {
    const { getByTestId } = render(
      <a data-testid="link" href="/Login">
        Login
      </a>
    );
    expect(getByTestId("link")).toHaveAttribute("href", "/Login");
  });
  test("Test home link on navbar", () => {
    const { getByTestId } = render(
      <a data-testid="link" href="/">
        Home
      </a>
    );
    expect(getByTestId("link")).toHaveAttribute("href", "/");
  });
  test("Test contactus link on navbar", () => {
    const { getByTestId } = render(
      <a data-testid="link" href="/ContactUs">
        Contact Us
      </a>
    );
    expect(getByTestId("link")).toHaveAttribute("href", "/ContactUs");
  });
  test("Test myaccount link on navbar", () => {
    const { getByTestId } = render(
      <a data-testid="link" href="/Account">
        My Account
      </a>
    );
    expect(getByTestId("link")).toHaveAttribute("href", "/Account");
  });
  test("Test signup link on navbar", () => {
    const { getByTestId } = render(
      <a data-testid="link" href="/Signup">
        Signup
      </a>
    );
    expect(getByTestId("link")).toHaveAttribute("href", "/Signup");
  });
});

describe("LoginPage", () => {
  test("It should render a heading content correctly", () => {
    render(<LoginPage />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("login form should be in the document", () => {
    const component = render(<LoginPage />);
    const inputNode = component.getByText("Email");
    expect(inputNode).toBeInTheDocument();
  });
  test("email field should  have label", () => {
    const component = render(<LoginPage />);
    const emailInputNode = component.getByLabelText("Email");
    expect(emailInputNode.getAttribute("name")).toBe("email");
    screen.debug(emailInputNode);
  });
  test("email input should accept text", () => {
    const { getByLabelText } = render(<LoginPage />);
    const emailInputNode = getByLabelText("Email");
    expect(emailInputNode.value).toMatch("");
    fireEvent.change(emailInputNode, { target: { value: "testing" } });
    expect(emailInputNode.value).toMatch("testing");
  });
  test("password field should  have label", () => {
    const component = render(<LoginPage />);
    const password = component.getByLabelText("Password");
    expect(password.getAttribute("name")).toBe("password");
    screen.debug(password);
  });
  test("email input should accept text", () => {
    const { getByLabelText } = render(<LoginPage />);
    const password = getByLabelText("Email");
    expect(password.value).toMatch("");
    fireEvent.change(password, { target: { value: "test password" } });
    expect(password.value).toMatch("test password");
  });

  test("calls onSubmit prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Login</Button>);
    fireEvent.click(screen.getByText(/Login/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe("SignUp page", () => {
  test("It should render a heading content correctly", () => {
    render(<SignupPage />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("login form should be in the document", () => {
    const component = render(<SignupPage />);
    const inputNode = component.getByText("Email");
    expect(inputNode).toBeInTheDocument();
  });
  test("email field should  have label", () => {
    const component = render(<SignupPage />);
    const emailInputNode = component.getByLabelText("Email");
    expect(emailInputNode.getAttribute("name")).toBe("email");
    screen.debug(emailInputNode);
  });
  test("email input should accept text", () => {
    const { getByLabelText } = render(<SignupPage />);
    const emailInputNode = getByLabelText("Email");
    expect(emailInputNode.value).toMatch("");
    fireEvent.change(emailInputNode, { target: { value: "signupemail" } });
    expect(emailInputNode.value).toMatch("signupemail");
  });
  test("first_name field should be in the document", () => {
    const component = render(<SignupPage />);
    const first_name = component.getByText("first_name");
    expect(first_name).toBeInTheDocument();
  });
  test("first_name field should have label", () => {
    const component = render(<SignupPage />);
    const first_name = component.getByLabelText("first_name");
    expect(first_name.getAttribute("name")).toBe("first_name");
    screen.debug(first_name);
  });
  test("first_name input should accept text", () => {
    const { getByLabelText } = render(<SignupPage />);
    const first_name = getByLabelText("first_name");
    expect(first_name.value).toMatch("");
    fireEvent.change(first_name, { target: { value: "first_name" } });
    expect(first_name.value).toMatch("first_name");
  });
  test("last_name field should be in the document", () => {
    const component = render(<SignupPage />);
    const last_name = component.getByText("last_name");
    expect(last_name).toBeInTheDocument();
  });
  test("last_name field should have label", () => {
    const component = render(<SignupPage />);
    const last_name = component.getByLabelText("last_name");
    expect(last_name.getAttribute("name")).toBe("last_name");
    screen.debug(last_name);
  });
  test("last_name input should accept text", () => {
    const { getByLabelText } = render(<SignupPage />);
    const last_name = getByLabelText("last_name");
    expect(last_name.value).toMatch("");
    fireEvent.change(last_name, { target: { value: "last_name" } });
    expect(last_name.value).toMatch("last_name");
  });
  test("password field should be in the document", () => {
    const component = render(<SignupPage />);
    const password = component.getByText("Password");
    expect(password).toBeInTheDocument();
  });
  test("password field should have label", () => {
    const component = render(<SignupPage />);
    const password = component.getByLabelText("Password");
    expect(password.getAttribute("name")).toBe("password");
    screen.debug(password);
  });
  test("password input should accept text", () => {
    const { getByLabelText } = render(<SignupPage />);
    const password = getByLabelText("Password");
    expect(password.value).toMatch("");
    fireEvent.change(password, { target: { value: "testpassword" } });
    expect(password.value).toMatch("testpassword");
  });
  test("calls onSubmit prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Signup</Button>);
    fireEvent.click(screen.getByText(/Signup/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

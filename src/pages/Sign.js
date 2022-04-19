import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "../styles/sign.module.css";
import { login, logout } from "../store/slices/authedUser";
import { addUser } from "../utils/API";

import Form from "../components/Form";
import Input from "../components/Input";

const Sign = () => {
  const pathname = window.location.pathname;
  const [isHasError, setIsHasError] = useState(false);
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      login({
        username: e.target.elements.username.value,
        password: e.target.elements.password.value,
      })
    );
  };
  const handleAddUser = (e) => {
    e.preventDefault();
    const elements = e.target.elements;
    addUser(
      elements.username.value,
      elements.name.value,
      elements.email.value,
      elements.password.value,
      elements.phone.value
    );
  };

  return (
    <main className={styles.sign}>
      <Form
        isHasError={isHasError}
        errorMsg={"Username or password isn't right"}
        onSubmit={pathname === "/sign-in" ? handleLogin : handleAddUser}
        title={pathname === "/sign-in" ? "Sign In" : "Sign Up"}
      >
        {pathname === "/sign-in" ? <SignIn /> : <SignUp />}
        <button type="button" onClick={() => dispatch(logout())}>
          Logout
        </button>
        <button type="button" onClick={() => console.log(authedUser)}>
          Logger
        </button>
      </Form>
    </main>
  );
};

const SignIn = () => (
  <>
    <Input
      labelTitle="username"
      type="text"
      name="username"
      placeholder="Enter your username"
      required
    />
    <Input
      labelTitle="Password"
      type="password"
      name="password"
      placeholder="Enter your password"
      required
    />
  </>
);
const SignUp = () => (
  <>
    <Input
      labelTitle="Username"
      type="text"
      name="username"
      placeholder="Enter your username"
      required
    />
    <Input
      labelTitle="Name"
      type="text"
      name="name"
      placeholder="Enter your name"
      required
    />
    <Input
      labelTitle="Email"
      type="email"
      name="email"
      placeholder="Enter your email"
      required
    />
    <Input
      labelTitle="Password"
      type="password"
      name="password"
      placeholder="Enter your password"
      required
    />
    <Input
      labelTitle="Phone"
      type="tel"
      name="phone"
      placeholder="Enter your phone"
      required
    />
  </>
);

export default Sign;

import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login, logout } from "../store/slices/authedUser";
import { addUser } from "../utils/API";

import styles from "../styles/sign.module.css";
import Form from "../components/Form";
import Input from "../components/Input";

const Sign = ({ authedUser, login, logout }) => {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  const [isHasError, setIsHasError] = useState(false);
  const [signUpMsg, setSignUpMsg] = useState("");

  useEffect(() => {
    authedUser && navigate("/");
  }, [authedUser]);

  const handleLogin = (e) => {
    e.preventDefault();

    login({
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    }).then((res) => {
      if (!res.payload || res.payload.detail) {
        setIsHasError(true);
      }
    });
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
    ).then((d) => {
      if (d === '"faild to send email"') {
        navigate("/sign-in");
        setIsHasError(false);
      } else {
        if (d === "this nick name is already used") {
          setSignUpMsg("this username is already used");
        } else {
          setSignUpMsg("Please, enter valid information");
        }
        setIsHasError(true);
      }
    });
  };

  return (
    <main className={styles.sign}>
      <Form
        isHasError={isHasError}
        errorMsg={
          pathname === "/sign-in"
            ? "Username or password isn't right"
            : signUpMsg
        }
        onSubmit={pathname === "/sign-in" ? handleLogin : handleAddUser}
        title={pathname === "/sign-in" ? "Sign In" : "Sign Up"}
      >
        {pathname === "/sign-in" ? <SignIn /> : <SignUp />}
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
      minLength="8"
      placeholder="Enter your password"
      required
    />
    <Link to="/reset" className={styles.reset}>
      Forget your password?
    </Link>
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
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      required
    />
    <Input
      labelTitle="Password"
      type="password"
      name="password"
      minLength="8"
      placeholder="Enter your password"
      required
    />
    <Input
      labelTitle="Phone"
      type="number"
      name="phone"
      placeholder="Enter your phone"
      required
    />
  </>
);

export default connect((state) => ({ authedUser: state.authedUser }), {
  login,
  logout,
})(Sign);

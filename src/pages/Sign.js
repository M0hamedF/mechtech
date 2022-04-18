import styles from "../styles/sign.module.css";

import Form from "../components/Form";
import Input from "../components/Input";

const Sign = () => {
  const pathname = window.location.pathname;

  return (
    <main className={styles.sign}>
      <Form title={pathname === "/sign-in" ? "Sign In" : "Sign Up"}>
        {pathname === "/sign-in" ? <SignIn /> : <SignUp />}
      </Form>
    </main>
  );
};

const SignIn = () => (
  <>
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

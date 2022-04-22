import { useState } from "react";
import { useSelector } from "react-redux";

import { resetPassword } from "../utils/API";

import styles from "../styles/reset.module.css";
import Form from "../components/Form";
import Input from "../components/Input";

const Reset = () => {
  const [msg, setMsg] = useState("");
  const [isHasError, setIsHasError] = useState(false);
  const authedUser = useSelector((state) => state.authedUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await resetPassword(
      authedUser.id,
      e.target.elements.email.value,
      e.target.elements.password.value
    );

    if (typeof res === "string") {
      setIsHasError(true);
    } else {
      setMsg("Reset success");
    }
  };

  return (
    <main className={styles.reset}>
      <Form
        submitTitle="Reset"
        isHasError={isHasError}
        title="Reset your password"
        onSubmit={handleSubmit}
      >
        {msg && <p role="alert">{msg}</p>}
        <Input
          labelTitle="Email"
          type="email"
          name="email"
          readOnly={authedUser ? true : false}
          placeholder="Enter your email"
          tabIndex={authedUser ? -1 : 0}
          defaultValue={authedUser?.email || ""}
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
      </Form>
    </main>
  );
};

export default Reset;

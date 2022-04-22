import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { update } from "../store/slices/authedUser";
import { updateUser } from "../utils/API";
import { userFormat } from "../utils/helpers";

import styles from "../styles/settings.module.css";
import Form from "../components/Form";
import Input from "../components/Input";

const Settings = ({ authedUser, update }) => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      !authedUser && navigate("/sign-in");
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [authedUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsValid(true);
    setMsg("");

    const elements = e.target.elements;
    const newData = elements.avatar.files[0]
      ? await updateUser(
          authedUser.id,
          elements.name.value,
          elements.username.value,
          elements.email.value,
          elements.phone.value,
          elements.avatar.files[0],
          elements.avatar.files[0].name
        )
      : await updateUser(
          authedUser.id,
          elements.name.value,
          elements.username.value,
          elements.email.value,
          elements.phone.value
        );

    if (newData.hasOwnProperty("id")) {
      update(userFormat(newData));
      setMsg("Update success");
    } else {
      setIsValid(false);
      setMsg("This username or email is already exists");
    }
  };

  return (
    <main className={styles.settings}>
      {authedUser && (
        <Form
          title="Update your information"
          submitTitle="Save"
          onSubmit={handleSubmit}
        >
          {msg && (
            <p role="alert" className={isValid ? styles.valid : styles.error}>
              {msg}
            </p>
          )}
          <Input
            labelTitle="Avatar"
            type="file"
            accept="image/*"
            name="avatar"
            defaultValue={null}
          />
          <Input
            labelTitle="Username"
            type="text"
            name="username"
            placeholder="Enter your username"
            defaultValue={authedUser.username}
            required
          />
          <Input
            labelTitle="Name"
            type="text"
            name="name"
            placeholder="Enter your name"
            defaultValue={authedUser.name}
            required
          />
          <Input
            labelTitle="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            defaultValue={authedUser.email}
            required
          />
          <Input
            labelTitle="Phone"
            type="number"
            name="phone"
            placeholder="Enter your phone"
            defaultValue={authedUser.phone}
            required
          />
        </Form>
      )}
    </main>
  );
};

export default connect((state) => ({ authedUser: state.authedUser }), {
  update,
})(Settings);

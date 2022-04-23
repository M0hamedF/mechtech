import { useState, useEffect } from "react";

import { getUser } from "../utils/API";
import { userFormat } from "../utils/helpers";

import styles from "../styles/user.module.css";
import avatarSrc from "../img/avatar.png";

const User = () => {
  const id = window.location.pathname.substr(6);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUser(id).then((data) => setUserData(userFormat(data)));
  }, []);

  return (
    <main className={styles.user}>
      <h1 className={styles.title}>User Profile</h1>

      {userData ? (
        <section>
          <div className={styles.avatar}>
            <img
              src={userData.img || avatarSrc}
              alt={`${userData.name} avatar`}
            />
          </div>

          <ul className={styles.list}>
            <li>
              Name: <span>{userData.name}</span>
            </li>
            <li>
              Username: <span>{userData.username}</span>
            </li>
            <li>
              Email: <span>{userData.email}</span>
            </li>
            <li>
              Phone: <span>{userData.phone}</span>
            </li>
          </ul>
        </section>
      ) : (
        <h2 className={styles.error}>
          This user doesn't exist or removed her/his account
        </h2>
      )}
    </main>
  );
};

export default User;

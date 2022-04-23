import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteUser } from "../utils/API";
import { logout } from "../store/slices/authedUser";

const DeleteUserBtn = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authedUser = useSelector((state) => state.authedUser);

  const handleClick = () => {
    const confirm = window.confirm("Are you sure to delete your profile?");
    confirm &&
      deleteUser(authedUser.id).then(() => {
        dispatch(logout());
        navigate("/");
      });
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      Delete Profile
    </button>
  );
};

export default DeleteUserBtn;

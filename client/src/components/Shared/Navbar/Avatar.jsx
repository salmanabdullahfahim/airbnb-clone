import { useContext } from "react";
import avatarURL from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";
const Avatar = () => {
  const { user } = useContext(AuthContext);

  return (
    <img
      src={user && user.photoURL ? user.photoURL : avatarURL}
      alt="avatar"
      className="rounded-full"
      height={30}
      width={30}
    />
  );
};

export default Avatar;

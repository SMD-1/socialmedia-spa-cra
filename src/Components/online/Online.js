import "./online.css";
import { prefix } from "../../apiconfig";

const Online = ({ user }) => {
  const { username } = user;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileContainer">
        <img src={`${prefix}images/person/user.png`} alt="friend1" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarFriendName">{username}</span>
    </li>
  );
};

export default Online;

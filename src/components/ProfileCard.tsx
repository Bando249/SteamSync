import "./ProfileCard.css";
const ProfileCard = () => {
  return (
    <div className="box">
      <img
        src="src/assets/userImage.png"
        alt="user image placeholder"
        className="img-fluid "
      />
      <ul className="list-group">
        <li className="list-group-item">Hours Played: 1500</li>
        <li className="list-group-item">Games Owned: 43</li>
        <li className="list-group-item">Most Played Game: COD</li>
        <li className="list-group-item">Most Played Genre: Action</li>
      </ul>
    </div>
  );
};

export default ProfileCard;

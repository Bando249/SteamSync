import ProfileCard from "../components/ProfileCard";
import TopGames from "../components/TopGames";
import "./AccountPage.css";
const AccountPage = () => {
  return (
    <div>
      <div className="account-page">
        <div className="profile-card">
          <ProfileCard />
        </div>
        <div className="top-games">
          <TopGames />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

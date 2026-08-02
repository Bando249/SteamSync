import "./HomePage.css";
import { Button } from "@chakra-ui/react";
const HomePage = () => {
  return (
    <div className="home">
      <div>
        <h1>SteamSync</h1>
        <p>
          Compare your Steam library with friends and discover what to play
          next.
        </p>
      </div>
      <div>
        <Button variant="surface" colorPalette="blue" rounded="3xl">
          Login With Steam
        </Button>
      </div>
      <hr />
    </div>
  );
};

export default HomePage;

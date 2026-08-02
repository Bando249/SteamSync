import { GridItem, Grid } from "@chakra-ui/react";
import ProfileCard from "../components/ProfileCard";
import TopGames from "../components/TopGames";
import "./AccountPage.css";
const AccountPage = () => {
  return (
    <Grid templateColumns={"repeat(4,1fr)"} gap="6">
      <GridItem colSpan={1}>
        <ProfileCard />
      </GridItem>

      <GridItem colSpan={3}>
        <TopGames />
      </GridItem>
    </Grid>
  );
};

export default AccountPage;

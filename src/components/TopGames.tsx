import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import GameCard from "./GameCard";
import "./TopGames.css";
const games = Array.from({ length: 15 });
const TopGames = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <h1 className="header">Top Games</h1>
      </Box>
      <hr className="hr" />
      <Grid
        templateColumns={"repeat(5, 180px)"}
        templateRows={"repeat(3, 1fr)"}
        rowGap={3}
        columnGap={3}
        justifyContent={"center"}
      >
        {games.map(() => (
          <GridItem>
            <GameCard />
          </GridItem>
        ))}
      </Grid>
      <Box mt={3} display={"flex"} justifyContent={"center"}>
        <Button variant="surface" colorPalette="blue" rounded="3xl">
          <a href="library">Full Library</a>
        </Button>
      </Box>
    </>
  );
};

export default TopGames;

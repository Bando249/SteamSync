import { Box, HStack } from "@chakra-ui/react";
import { FaBiohazard } from "react-icons/fa";
import { Link } from "react-router";
import "./NavBar.css";
import { PiUserFill } from "react-icons/pi";
const NavBar = () => {
  const spaceBetween = "15px";
  return (
    <HStack background={"grey"} h={12} padding={"10px"}>
      <Box pr={spaceBetween}>
        <Link className="navbar-brand" to="/">
          <FaBiohazard size={25} />
        </Link>
      </Box>
      <Box pr={spaceBetween}>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </Box>
      <Box pr={spaceBetween}>
        <Link className="nav-link" to="/library">
          Library
        </Link>
      </Box>
      <Link className="nav-link" to="/friends">
        Friends
      </Link>
      <Box ml={"auto"}>
        <Link className="nav-link" to="/account">
          <PiUserFill className="account-logo" size={25} />
        </Link>
      </Box>
    </HStack>
  );
};

export default NavBar;

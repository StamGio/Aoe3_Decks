import { Box, Flex, Img, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      className="navbar navbar-expand-lg navbar-light bordercolor"
      bgGradient="linear-gradient(90deg, rgb(23, 8, 3), rgb(83, 36, 18) 40%, rgb(23, 8, 3))"
    >
      <Box className="container-fluid d-flex justify-content-center align-items-center">
        <Link href="http://127.0.0.1:5173">
          <Img
            src="./src/assets/Images/aoe3_logo.png"
            alt="AOE3 Logo"
            width="30"
            height="24"
          />
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;

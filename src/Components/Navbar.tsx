import { Box, Button, Flex, Img, Link } from "@chakra-ui/react";
import { BsBack } from "react-icons/bs";

// Button function
const Navbar = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Flex
      className="navbar navbar-expand-lg navbar-light bordercolor"
      bgGradient="linear-gradient(90deg, rgb(23, 8, 3), #532412 40%, rgb(23, 8, 3))"
      paddingY={2}
      paddingX={{ base: 4, md: 8 }}
    >
      <Button
        className="justify-content-left align-items-left d-flex"
        marginLeft={{ base: 2, md: 7 }}
        marginRight={{ base: 2, md: 8 }}
        color="#532412"
        borderColor="#532412"
        variant="outline"
        onClick={handleGoBack}
      >
        <BsBack />
      </Button>

      <Box
        className="container-fluid justify-content-center align-items-center"
        marginLeft="auto"
        marginRight={{ base: 2, md: 8 }}
      >
        <Link href="https://aoe3-decks.vercel.app/" marginRight={8}>
          <Img src="../aoe3_logo.png" alt="AOE3 Logo" width="30" height="24" />
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;

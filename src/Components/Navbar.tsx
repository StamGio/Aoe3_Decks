import { Box, Button, Flex, Img, Link } from "@chakra-ui/react";
import { BsBack } from "react-icons/bs";

const Navbar = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Flex
      className="navbar navbar-expand-lg navbar-light bordercolor"
      bgGradient="linear-gradient(90deg, rgb(23, 8, 3), #532412 40%, rgb(23, 8, 3))"
    >
      <Button
        className="justify-content-left align-items-left d-flex"
        marginLeft={7}
        color="#532412"
        borderColor="#532412"
        variant="outline"
        onClick={handleGoBack}
      >
        <BsBack />
      </Button>

      <Box className="container-fluid justify-content-center align-items-center">
        <Link href="http://127.0.0.1:5173" marginRight={8}>
          <Img
            src="../src/assets/Images/aoe3_logo.png"
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

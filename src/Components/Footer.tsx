import { Box, Flex, Icon, Link, List, ListItem, Text } from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaGlobe } from "react-icons/fa";

<Link
  href="/"
  className="mb-3 me-2 mb-md-0 text-body text-decoration-none lh-1"
></Link>;

const Footer = () => {
  return (
    <>
      <Flex
        className="bordercolor"
        py={3}
        borderTop="1px"
        bgGradient="linear-gradient(90deg, rgb(23, 8, 3), rgb(83, 36, 18) 40%, rgb(23, 8, 3))"
        justify="space-between"
        align="center"
        color="whiteAlpha.800"
      >
        {/*  Text */}
        <Box flex="1" py={4} px={6} maxWidth="850px" fontWeight="bold">
          <Text fontSize="sm" as="span">
            <i>
              Age of Empires III: Definitive Edition © Microsoft Corporation.
            </i>{" "}
            This site was created under{" "}
            <Link
              fontStyle="italic"
              _hover={{ color: "#ebc837" }}
              href="https://www.xbox.com/en-US/developers/rules"
              isExternal
            >
              "Microsoft's Game Content Usage Rules"
            </Link>{" "}
            using assets from <i>Age of Empires III: Definitive Edition</i>, and
            it is not endorsed by or affiliated with <i>Microsoft</i>.
          </Text>
          <Text mt={2} fontSize="sm">
            Inspired by{" "}
            <Link
              href="https://aoe3-companion.web.app/"
              fontStyle="italic"
              _hover={{ color: "#ebc837" }}
              isExternal
            >
              AOE DE Companion App
            </Link>
          </Text>
        </Box>

        {/* Icons  */}
        <Box p={4}>
          <List className="d-flex flex-row align-items-center justify-content-center  col-md-4">
            <ListItem className="ms-4">
              <Link href="https://discord.gg/wKVusFaxXM">
                <Icon
                  as={FaDiscord}
                  boxSize={6}
                  color="whiteAlpha.800"
                  _hover={{ color: "#ebc837" }}
                />
              </Link>
            </ListItem>
            <ListItem className="ms-4">
              <Link href="https://github.com/StamGio/Aoe3_Decks">
                <Icon
                  as={FaGithub}
                  boxSize={6}
                  color="whiteAlpha.800"
                  _hover={{ color: "#ebc837" }}
                />
              </Link>
            </ListItem>
            <ListItem className="ms-4">
              <Link href="https://stamatisgio-portfolio.herokuapp.com/">
                <Icon
                  as={FaGlobe}
                  boxSize={6}
                  color="whiteAlpha.800"
                  _hover={{ color: "#ebc837" }}
                />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Flex>
    </>
  );
};

export default Footer;

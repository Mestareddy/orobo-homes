import { Box, Text } from "@chakra-ui/react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = ({ siteName }) => (
  <Box
    textAlign="center"
    padding="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
    display="flex"
    justifyContent="center"
    alignContent="center"
    alignItems='center'
    flexWrap="nowrap"
  >
    <AiOutlineCopyrightCircle/>
    <Text paddingLeft='2'>{siteName} 2022</Text>
  </Box>
);

export default Footer;

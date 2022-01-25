import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const siteName = "Orobo Homes";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>{siteName}</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
      <header>
        <Navbar siteName={siteName} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer siteName={siteName} />
      </footer>
    </Box>
  </>
);

export default Layout;

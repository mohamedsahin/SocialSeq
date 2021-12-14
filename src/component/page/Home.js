import React from "react";
import { Container } from "../style/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../style/Global";
import Header from "./Header";
import content from "../../content";
import Card from "./Card";
import Footer from "./Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
         <Card key={index} item={item}/>
        ))}
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}

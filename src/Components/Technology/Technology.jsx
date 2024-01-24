import { Typography } from "@mui/material";
import styled from "styled-components";

const StyledHome = styled.div`
  background-image: url("/src/assets/technology/background-technology-desktop.jpg");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 120px;

  @media only screen and (max-width: 768px) {
    padding-top: 70px;
    background-image: url("/src/assets/technology/background-technology-tablet.jpg");
  }
  @media only screen and (max-width: 425px) {
    padding-top: 40px;
    background-image: url("/src/assets/technology/background-technology-mobile.jpg");
  }
`;

function Technology() {
  return (
    <>
      <StyledHome>
        <Typography variant="h1">Technology</Typography>
        <Typography variant="body1">
          This is a paragraph of text using the body1 style from the theme.
        </Typography>
      </StyledHome>
    </>
  );
}

export default Technology;

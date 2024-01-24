import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Avatar, Grid } from "@mui/material";

const StyledAppBar = styled(AppBar)`
  background-color: transparent !important;
  height: 90px;
  width: 100%;
  margin-top: 70px;
  margin-bottom: 40px;
  padding-left: 0;
  padding-right: 0;

  & .navbarContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: 0 auto;
  }

  & .lineCenter {
    pading-left: 30px;
    height: 1px;
    border: solid 0.2px white;
  }

  & .buttonSide {
    display: flex;
    gap: 20px;
    height: 90px;
    backdrop-filter: blur(15px);
  }

  & .avatar {
  }

  @media only screen and (max-width: 768px) {
    margin-top: 30px;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 0;
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
  border-radius: 0px;
  padding: 8px 16px;
  transition: border 0.3s ease;

  &:hover {
    border-bottom: 3px solid white;
  }
`;

const MyAppBar = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <div className="navbarContent">
          <Grid item className="avatar" xs={2}>
            <Avatar
              as={Link}
              to="/"
              alt="User Profile"
              src="src/assets/shared/logo.svg"
              sx={{ width: 50, height: 50 }}
            />
          </Grid>
          <Grid
            container
            alignItems="center"
            xs={12}
            className="lineCenter"
          ></Grid>
          <Grid item className="buttonSide" xs={8}>
            <StyledButton as={Link} to="/">
              Home
            </StyledButton>
            <StyledButton as={Link} to="/crew">
              Crew
            </StyledButton>
            <StyledButton as={Link} to="/technology">
              Technology
            </StyledButton>
            <StyledButton as={Link} to="/destination">
              Destination
            </StyledButton>
          </Grid>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default MyAppBar;

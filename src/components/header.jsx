import {
  AppBar,
  Toolbar,
  styled,
  InputBase,
  Box,
  StepContext,
} from "@mui/material";
import logo from "../images/logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
const StyledHeader = styled(AppBar)`
  background: #000000;
`;

const Image = styled("img")({
  width: 250,
});

const StyledComponent = styled(Box)`
  background-color: rgb(255, 255, 255, 0.15);
  margin-left: 20px;
  border-radius: 5px;
  position: relative;
`;

const InputBox = styled(InputBase)`
  color: inherit;
  margin: 0 50px;
`;

const StyledIcon = styled(SearchIcon)`
  position: absolute;
  top: 3px;
  margin-left: 10px;
`;

const Header = () => {
  // const getText = (e) => {
  //   setText(e.target.value);
  // };

  return (
    <StyledHeader position="static">
      <Toolbar>
        <Image src={logo} alt="got" />
        <StyledComponent>
          <StyledIcon />
          <InputBox
            placeholder="Search by name"
            // onChange={(e) => getText(e)}
          />
        </StyledComponent>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;

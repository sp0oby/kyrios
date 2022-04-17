import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import logo from "../../assets/FullLogo.png";
import Connect from "./Connect";

const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 24,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));

export default function Header() {
  return (
    <Wrapper>
      <a href="https://avayofinance.com" target="__blank">
        <img src={logo} alt="" width={"100%"} style={{ marginTop: -48 }} />
      </a>
      <Connect responsive={false} />
      <Typography style={{color: "#2CCBFF"}} variant="h6" marginTop={-3}>
      The Godly METIS Reward Pool
      </Typography>
    </Wrapper>
  );
}

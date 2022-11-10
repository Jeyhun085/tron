import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ClearIcon from "@mui/icons-material/Clear";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const holaSVG = (
  <svg style={{ width: "113", fill: "white" }} viewBox="0 0 151.9 63.1">
    <path style={{ fill: "red" }} d="M0 0h151.9v63.1H0z"></path>
    <path d="M131 48.3a6.6 6.6 0 1 1 6.6 6.4 6.55 6.55 0 0 1-6.6-6.4"></path>
    <ellipse cx="137.6" cy="48.3" rx="6.6" ry="6.4"></ellipse>
    <path d="M132 9h11.8v29.5H132zM68 14.6c1.2 1.5 1.7 4.2 1.7 6.6l-.1 19.3c-.2 5-3.1 10.5-7.7 12.2-4.6 2.1-11.8 1.8-15.8-1.3a13.65 13.65 0 0 1-5.5-10.6V19.3c.3-3.1 1.9-6.3 4.5-7.8a12.76 12.76 0 0 1 6.2-2.1c4.8-.5 13.2-.5 16.7 5.2m-11.2 5.3a2.53 2.53 0 0 0-2.5-.4 2.18 2.18 0 0 0-1.4 1.8v19a2 2 0 0 0 1.5 1.7 3.65 3.65 0 0 0 1.8 0 2 2 0 0 0 1.2-1.9V21.4a1.75 1.75 0 0 0-.6-1.5M121.8 9.2c.3.1 7.1 44.3 7.1 44.5h-11.2l-1.2-6.6H108l-1.3 6.6H95.2s8.5-44.4 8.4-44.5c-.1.1 18.2 0 18.2 0m-7.2 28.2s-2.5-12.7-2.5-12.8 0-.2-2.6 12.8h5.1M86.3 42.2h7.2v11.6H74.2V9.3h12c.1 0 .1 32.9.1 32.9M20 25.2h4.8V9.4h11.7v44.4H24.8l.1-17.4h-4.7l-.1 17.4h-12V9.4H20v15.8z"></path>
  </svg>
);

const navButtonsInfo = [
  "HOME",
  "CELEBRITIES",
  "ENTERTAINMENT",
  "ROYALS",
  "HEALTH AND BEAUTY",
  "FASHION",
  "LIFESTYLE",
  "FOOD",
  "AMERICAS",
  "HOLA+",
  "LATINA POWERHOUSE",
  "PHOTOS",
  "CONTACT HOLAI USA",
  "GESTIONA TUS NOTIFICACIONES",
];

const footerInfo = [
  "Sitios HOLA!",
  "Sitios internacionales",
  "Politica de privacidad",
  "Configuracion de privacidad",
  "Aviso legal",
  "Cookies",
  "Contacto",
];

export default function ButtonAppBar() {
  const [state, setState] = React.useState(false);
  const [collapseState, setCollapseState] = React.useState(false);
  const [dropDownText, setDropDownText] = React.useState("US EDITION");

  function toggleDropDown() {
    setCollapseState(!collapseState);
  }

  function changeText(text) {
    setDropDownText(text);
    setCollapseState(!collapseState);
  }

  function changeDrawer(status) {
    setState(status);
  }

  const list = () => (
    <Box sx={{ width: "300px", fontFamily:"'Jost', sans-serif" }} role="presentation">
      <List style={{ backgroundColor: "rgb(43, 49, 57)", color: "white" }}>
        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <a href="/">{holaSVG}</a>

          <Button
            onClick={() => {
              changeDrawer(false);
            }}
          >
            <ClearIcon style={{fill:"white"}}/>
          </Button>
        </ListItem>
        <ListItemButton onClick={toggleDropDown}>
          <ListItemText primary={dropDownText} />
          {collapseState ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={collapseState} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              onClick={() => {
                changeText("US EDITION");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="US EDITION" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                changeText("MX EDITION");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="MX EDITION" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                changeText("ES EDITION");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="ES EDITION" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <List>
        <ListItem>
          
        </ListItem>
      </List>
      <List>
        {navButtonsInfo.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List style={{ backgroundColor: "rgb(43, 49, 57)", color: "white" }}>
        {footerInfo.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List style={{ backgroundColor: "rgb(43, 49, 57)", color: "#D1B000" }}>
        <ListItem disablePadding>
          <ListItemButton style={{ justifyContent: "center" }}>
            <FacebookIcon />
          </ListItemButton>
          <ListItemButton style={{ justifyContent: "center" }}>
            <TwitterIcon />
          </ListItemButton>
          <ListItemButton style={{ justifyContent: "center" }}>
            <InstagramIcon />
          </ListItemButton>
          <ListItemButton style={{ justifyContent: "center" }}>
            <PinterestIcon />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }} className>
      <AppBar color="inherit" position="fixed">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <a href="/">{holaSVG}</a>
          <Button
            onClick={() => {
              changeDrawer(true);
            }}
          >
            <svg style={{ width: "25", fill: "red" }} viewBox="0 0 32.5 26.5">
              <g class="exclama">
                <path d="M0 .5h21v8H0z"></path>
                <circle cx="28" cy="4.5" r="4.5"></circle>
              </g>
              <path class="top" d="M0 11.5h32v6H0z"></path>
              <path class="bottom" d="M0 20.5h32v6H0z"></path>
            </svg>
          </Button>
        </Toolbar>
        <Drawer
          anchor={"right"}
          open={state}
          onClose={() => {
            changeDrawer(false);
          }}
          
        >
          {list()}
        </Drawer>
      </AppBar>
    </Box>
  );
}

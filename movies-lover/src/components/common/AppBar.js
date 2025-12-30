// import { useState } from "react";
import Link from "next/link";
// mui imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { theme, darkTheme } from "@/styles/mui/theme";

//icons import
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "@/redux/reducer/themeReducer";

export default function Appbar() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme).activeTheme;
  const theme = useTheme();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() =>
                  dispatch(toggleTheme())
              }
            >
              {currentTheme === "dark" ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
            <Link href={"/"}>
              <Button sx={{color: theme.palette.icon.main}}>Home</Button>
            </Link>
            <Link href={"/blog"}>
              <Button sx={{color: theme.palette.icon.main}}>Blog</Button>
            </Link>
            <Link href={"/login"}>
            <Button sx={{color: theme.palette.icon.main}}>Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

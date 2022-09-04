import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "red" }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pub Quiz
          </Typography>
          <Button color="inherit" onClick={() => navigate("/leaderboard")}>
            Leaderboard
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

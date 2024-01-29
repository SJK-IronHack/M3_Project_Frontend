import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box onClick={() => navigate("/")}>EVENTER</Box>
        <Box sx={{ display: "flex", gap: 8 }}>
          <Button variant="outlined" onClick={() => navigate("/addevent")}>
            Create Event
          </Button>
          <Button variant="outlined" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="outlined" onClick={() => navigate("/signup")}>
            Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

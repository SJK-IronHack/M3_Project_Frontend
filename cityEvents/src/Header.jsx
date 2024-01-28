import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>EVENTER</Box>
        <Box sx={{ display: "flex", gap: 8 }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/addevent")}
          >
            Create Event
          </Button>
          <Typography>Login</Typography>
          <Typography>Signup</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

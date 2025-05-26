import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar sx= {{
      margin: "20px",
    }}
    position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <Typography variant="h6">
          Flashcards Study App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

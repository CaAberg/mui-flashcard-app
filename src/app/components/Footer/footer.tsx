import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: "center",
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        Carl Åberg
      </Typography>
    </Box>
  );
}
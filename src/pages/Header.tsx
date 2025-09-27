import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" elevation={0} className="bg-white shadow-sm">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          className="text-gray-800"
        >
          OC Wildland
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

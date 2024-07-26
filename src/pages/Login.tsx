import { Box, Button, TextField, Typography } from "@mui/material";

export default function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius:" 0.3rem",
        padding: "0.5rem",
      }}
    >
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box component="form" noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

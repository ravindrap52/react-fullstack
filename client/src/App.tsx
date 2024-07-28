import { Container } from "@mui/material";
import Login from "./pages/Login";

function App() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Login />
    </Container>
  );
}

export default App;

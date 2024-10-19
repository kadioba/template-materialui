import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Container from "@mui/material/Container";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <ListarTarefa />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;

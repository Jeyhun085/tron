import ButtonAppBar from "./Components/ButtonAppBar";
import MainContent from "./Components/MainContent";
import Comments from "./Components/Comments";
import AlertDialogSlide from "./Components/AlertDialogSlide";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./Components/styles.css";
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Jost",
      textTransform: "none",
      fontSize: 16,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ButtonAppBar />
        <MainContent />
        <Comments />
        {/* <AlertDialogSlide/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;

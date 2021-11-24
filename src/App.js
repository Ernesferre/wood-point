import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Box from "@mui/material/Box";

function App() {
  return (
    <>
      <Navbar />
      <Box display="flex" justifycontent="center">
        <Carousel cursor="pointer" />
      </Box>
    </>
  );
}

export default App;

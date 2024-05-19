import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Box } from "@mui/material";

export default function App() {
  return (
    <>
      <Navbar />
      <Box
        component={"main"}
        sx={{
          color: "white",
          px: { xs: "1rem", md: "2rem", lg: "4rem", xl: "6rem" },
        }}
      >
        <HeroSection />
        <About />
        <Projects />
        <Contact />
      </Box>
    </>
  );
}

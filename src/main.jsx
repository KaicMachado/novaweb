import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <NavBar />
  <Header />
 </StrictMode>
);

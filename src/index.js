import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";

import App from "./App";
import Searchbox from "./Searchbox";
import Displaysearchedlocation from "./Displaysearchedlocation";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Navbar />
    <Searchbox />
    <Displaysearchedlocation />
    <Footer />
  </StrictMode>
);

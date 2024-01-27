import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Tut7 from "./Tut7package/Tut7";



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
 <Tut7/>
  </StrictMode>
    
);
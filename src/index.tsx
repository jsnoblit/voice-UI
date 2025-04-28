import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./screens/Layout";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
);

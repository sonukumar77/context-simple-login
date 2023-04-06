import { createRoot } from "react-dom/client";

import App from "./App";
import ContextProvider from "./components/context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

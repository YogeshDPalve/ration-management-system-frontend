import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./components/theme-provider";
import { Provider } from "react-redux";
import { appStore } from "./app/store";

createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <StrictMode>
      <Provider store={appStore}>
        <App />
      </Provider>
    </StrictMode>
  </ThemeProvider>
);

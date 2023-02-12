import App from "./App";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./index.css";

const qClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={qClient}>
    <App />
    <ReactQueryDevtools initialIsOpen />
  </QueryClientProvider>,
);

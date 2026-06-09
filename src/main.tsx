import { ViteReactSSG } from "vite-react-ssg";
import routes from "./routes";
import "./styles/globals.css";
import "@fontsource-variable/inter/index.css";
import "@fontsource-variable/lora/index.css";
import "./index.css";

export const createRoot = ViteReactSSG({ routes });

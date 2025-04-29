import { BrowserRouter } from "react-router";
import { MyRoutes } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  );
}

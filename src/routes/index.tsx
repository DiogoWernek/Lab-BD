import { Routes, Route } from "react-router";
import { Home } from "../pages/home";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

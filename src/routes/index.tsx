import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/details/:id" element={<Home />} />
    </Routes>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Views/Users/Layout/MainLayout";
import Home from "./Views/Users/Pages/Home";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

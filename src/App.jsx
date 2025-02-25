import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="*" element={<h1>404</h1>}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

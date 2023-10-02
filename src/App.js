// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import MoreInfo from "./pages/MoreInfo";
import Laws from "./pages/Laws";
import SubLaw from "./pages/SubLaw";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/Lawyer" element={<Home />} />
        <Route path="/Lawyer/blog" element={<Blog />} />
        <Route path="/Lawyer/sub" element={<MoreInfo />} />
        <Route path="/Lawyer/law" element={<Laws />} />
        <Route path="/Lawyer/LawSection" element={<SubLaw />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

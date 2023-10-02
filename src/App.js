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
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sub" element={<MoreInfo />} />
          <Route path="/law" element={<Laws />} />
          <Route path="/LawSection" element={<SubLaw />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

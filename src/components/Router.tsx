import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "./../pages/NotFound";
import Etc from "./../pages/Etc";
import Display from "../Layout";
import Skills from "../pages/Skills";
import Project from "./../pages/Project";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Display />}>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/etc" element={<Etc />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default Router;

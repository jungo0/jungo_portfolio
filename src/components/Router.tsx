import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import NotFound from "./../pages/NotFound";
import Etc from "./../pages/Etc";
import Display from "../Layout";
import Skills from "../pages/Skills";
import Project from "./../pages/Project";

function Router() {
  return (
    <Routes>
      <Route element={<Display />}>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/etc" element={<Etc />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Router;

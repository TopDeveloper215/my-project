import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../Icons";
import {Routes, Route, Navigate} from "react-router-dom"
import Dashboard from "../Views/Dashboard";
import Project from "../Views/Project";
import Earning from "../Views/Earning";
import Engineer from "../Views/Engineer";
import Technology from "../Views/Technology";
import Skills from "../Views/Skills";
import Overview from "../Views/Overview";
// import Navigate from 'react-router-dom';



function Routing() {
  return (
      <Routes>
          <Route exact path="/" element={<Navigate to="/dashboard" />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/project" element={<Project /> } />
          <Route exact path="/earning" element={<Earning /> } />
          <Route exact path="/engineer" element={<Engineer /> } />
          <Route exact path="/technology" element={<Technology /> } />
          <Route exact path="/skills" element={<Skills /> } />
          <Route exact path="/overview" element={<Overview /> } />
      </Routes>
  );
}
export default Routing;

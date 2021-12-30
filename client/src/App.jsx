import React from "react";
import { Router } from "@reach/router";

import NavBar from "./components/NavBar/NavBar";
import ListView from "./components/ListView/ListView";
import StudentView from "./components/StudentView/StudentView";
import NewStudent from "./components/NewStudent/NewStudent";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <ListView path="/" />
        <StudentView path="/student/:studentId" />
        <NewStudent path="/newStudent" />
      </Router>
    </>
  );
};

export default App;

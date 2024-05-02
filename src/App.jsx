import React, { useState } from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import StudentList from "./Components/StudentList";
import ClassYearList from "./Components/ClassYearList";




function App() {
   const [cohort, setCohort] = useState("All Students");
  
  return (
    <div className="container">
      <NavBar />
      <StudentList cohort={cohort}/>
      <ClassYearList setCohort={setCohort}/>

    </div>
  );

}

export default App;
// setCohort={setCohort} cohort={cohort}
import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import CVDisplay from "./components/CVDisplay";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  return (
    <div className="App">
      <div className="edit-section">
        <h1>CV Generator</h1>
        <PersonalInfo info={personalInfo} setInfo={setPersonalInfo} />
        <Experience />
        <Education />
        <Skills />
        <Languages />
      </div>

      <div className="preview-section">
        <CVDisplay info={personalInfo} />
      </div>
    </div>
  );
}

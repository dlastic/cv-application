import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import ExperienceList from "./components/ExperienceList";
import EducationList from "./components/EducationList";
import SkillsList from "./components/SkillsList";
import Languages from "./components/Languages";
import CVDisplay from "./components/CVDisplay";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [experiences, setExperiences] = useState([
    {
      id: Date.now(),
      company: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  const [educations, setEducations] = useState([
    {
      id: Date.now(),
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  const [skills, setSkills] = useState([
    {
      id: Date.now(),
      name: "",
    },
  ]);

  return (
    <div className="App">
      <div className="edit-section">
        <h1>CV Generator</h1>
        <PersonalInfo info={personalInfo} setInfo={setPersonalInfo} />
        <ExperienceList
          experiences={experiences}
          setExperiences={setExperiences}
        />
        <EducationList educations={educations} setEducations={setEducations} />
        <SkillsList skills={skills} setSkills={setSkills} />
        <Languages />
      </div>

      <div className="preview-section">
        <CVDisplay
          info={personalInfo}
          experiences={experiences}
          educations={educations}
          skills={skills}
        />
      </div>
    </div>
  );
}

import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import ExperienceList from "./components/ExperienceList";
import EducationList from "./components/EducationList";
import SkillsList from "./components/SkillsList";
import LanguagesList from "./components/LanguagesList";
import ProjectsList from "./components/ProjectsList";
import CVDisplay from "./components/CVDisplay";
import exampleData from "./data/exampleData";
import {
  initializePersonalInfo,
  initializeExperience,
  initializeEducation,
  initializeSkill,
  initializeLanguage,
  initializeProject,
} from "./data/initializers";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(initializePersonalInfo());
  const [experiences, setExperiences] = useState([initializeExperience()]);
  const [educations, setEducations] = useState([initializeEducation()]);
  const [skills, setSkills] = useState([initializeSkill()]);
  const [languages, setLanguages] = useState([initializeLanguage()]);
  const [projects, setProjects] = useState([initializeProject()]);

  function loadExample() {
    setPersonalInfo(exampleData.personalInfo);
    setExperiences(exampleData.experiences);
    setEducations(exampleData.educations);
    setSkills(exampleData.skills);
    setLanguages(exampleData.languages);
    setProjects(exampleData.projects);
  }

  function clearData() {
    setPersonalInfo(initializePersonalInfo());
    setExperiences([initializeExperience()]);
    setEducations([initializeEducation()]);
    setSkills([initializeSkill()]);
    setLanguages([initializeLanguage()]);
    setProjects([initializeProject()]);
  }

  return (
    <div className="App">
      <div className="edit-section">
        <button onClick={loadExample}>Load Example</button>
        <button onClick={clearData}>Clear Data</button>
        <h1>CV Generator</h1>
        <PersonalInfo info={personalInfo} setInfo={setPersonalInfo} />
        <ExperienceList
          experiences={experiences}
          setExperiences={setExperiences}
        />
        <EducationList educations={educations} setEducations={setEducations} />
        <SkillsList skills={skills} setSkills={setSkills} />
        <LanguagesList languages={languages} setLanguages={setLanguages} />
        <ProjectsList projects={projects} setProjects={setProjects}/>
      </div>

      <div className="preview-section">
        <CVDisplay
          info={personalInfo}
          experiences={experiences}
          educations={educations}
          skills={skills}
          languages={languages}
          projects={projects}
        />
      </div>
    </div>
  );
}

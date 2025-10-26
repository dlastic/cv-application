import { useState } from "react";
import "./App.css";
import CollapsibleSection from "./components/CollapsibleSection";
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

  const sections = [
    {
      key: "personal",
      title: "Personal Information",
      defaultOpen: true,
      content: <PersonalInfo info={personalInfo} setInfo={setPersonalInfo} />,
    },
    {
      key: "experience",
      title: "Professional Experience",
      content: (
        <ExperienceList
          experiences={experiences}
          setExperiences={setExperiences}
        />
      ),
    },
    {
      key: "education",
      title: "Education",
      content: (
        <EducationList educations={educations} setEducations={setEducations} />
      ),
    },
    {
      key: "skills",
      title: "Skills",
      content: <SkillsList skills={skills} setSkills={setSkills} />,
    },
    {
      key: "languages",
      title: "Languages",
      content: (
        <LanguagesList languages={languages} setLanguages={setLanguages} />
      ),
    },
    {
      key: "projects",
      title: "Projects",
      content: <ProjectsList projects={projects} setProjects={setProjects} />,
    },
  ];

  return (
    <div className="App">
      <div className="edit-section">
        <button onClick={loadExample}>Load Example</button>
        <button onClick={clearData}>Clear Data</button>
        <h1>CV Generator</h1>

        {sections.map(({ key, title, content, defaultOpen }) => (
          <CollapsibleSection key={key} title={title} defaultOpen={defaultOpen}>
            {content}
          </CollapsibleSection>
        ))}
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

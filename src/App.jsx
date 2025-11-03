import { useRef, useState } from "react";
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
  const fileInputRef = useRef(null);
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

  function saveData() {
    const exportData = {
      personalInfo,
      experiences,
      educations,
      skills,
      languages,
      projects,
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "cv-data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function importData() {
    fileInputRef.current?.click();
  }

  function handleImport(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = ({ target }) => {
      try {
        const parsed = JSON.parse(target.result);

        setPersonalInfo(parsed.personalInfo ?? initializePersonalInfo());
        setExperiences(parsed.experiences ?? [initializeExperience()]);
        setEducations(parsed.educations ?? [initializeEducation()]);
        setSkills(parsed.skills ?? [initializeSkill()]);
        setLanguages(parsed.languages ?? [initializeLanguage()]);
        setProjects(parsed.projects ?? [initializeProject()]);
      } catch (error) {
        console.error("Failed to import CV data", error);
      } finally {
        event.target.value = "";
      }
    };
    reader.readAsText(file);
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
      <input
        ref={fileInputRef}
        type="file"
        accept="application/json"
        onChange={handleImport}
        style={{ display: "none" }}
      />
      <div className="edit-section">
        <div className="toolbar">
          <button className="btn btn-secondary" onClick={loadExample}>
            Load Example
          </button>
          <button className="btn btn-primary" onClick={saveData}>
            Save Data
          </button>
          <button className="btn btn-primary" onClick={importData}>
            Import Data
          </button>
          <button className="btn btn-outline" onClick={clearData}>
            Clear Data
          </button>
        </div>
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

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
import exampleCV from "./state/exampleCV";
import {
  initializePersonalInfo,
  initializeExperience,
  initializeEducation,
  initializeSkill,
  initializeLanguage,
  initializeProject,
} from "./state/initialState";

export default function App() {
  const fileInputRef = useRef(null);
  const [personalInfo, setPersonalInfo] = useState(initializePersonalInfo());
  const [experiences, setExperiences] = useState([initializeExperience()]);
  const [educations, setEducations] = useState([initializeEducation()]);
  const [skills, setSkills] = useState([initializeSkill()]);
  const [languages, setLanguages] = useState([initializeLanguage()]);
  const [projects, setProjects] = useState([initializeProject()]);

  const sections = {
    personalInfo: {
      value: personalInfo,
      setter: setPersonalInfo,
      init: initializePersonalInfo,
      title: "Personal Information",
      defaultOpen: true,
      render: () => (
        <PersonalInfo info={personalInfo} setInfo={setPersonalInfo} />
      ),
    },
    experiences: {
      value: experiences,
      setter: setExperiences,
      init: () => [initializeExperience()],
      title: "Professional Experience",
      render: () => (
        <ExperienceList
          experiences={experiences}
          setExperiences={setExperiences}
        />
      ),
    },
    educations: {
      value: educations,
      setter: setEducations,
      init: () => [initializeEducation()],
      title: "Education",
      render: () => (
        <EducationList educations={educations} setEducations={setEducations} />
      ),
    },
    skills: {
      value: skills,
      setter: setSkills,
      init: () => [initializeSkill()],
      title: "Skills",
      render: () => <SkillsList skills={skills} setSkills={setSkills} />,
    },
    languages: {
      value: languages,
      setter: setLanguages,
      init: () => [initializeLanguage()],
      title: "Languages",
      render: () => (
        <LanguagesList languages={languages} setLanguages={setLanguages} />
      ),
    },
    projects: {
      value: projects,
      setter: setProjects,
      init: () => [initializeProject()],
      title: "Projects",
      render: () => (
        <ProjectsList projects={projects} setProjects={setProjects} />
      ),
    },
  };

  function applySectionData(data = {}) {
    Object.entries(sections).forEach(([key, { setter, init }]) => {
      setter(data[key] ?? init());
    });
  }

  function loadExample() {
    applySectionData(exampleCV);
  }

  function clearData() {
    applySectionData();
  }

  function saveData() {
    const exportData = Object.fromEntries(
      Object.entries(sections).map(([key, { value }]) => [key, value])
    );

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
        applySectionData(parsed);
      } catch (error) {
        console.error("Failed to import CV data", error);
      } finally {
        event.target.value = "";
      }
    };
    reader.readAsText(file);
  }

  function saveAsPDF() {
    window.print();
  }

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
          <div className="toolbar-group">
            <button className="btn btn-secondary" onClick={loadExample}>
              Load Example
            </button>
            <button className="btn btn-outline" onClick={clearData}>
              Clear Data
            </button>
          </div>

          <div className="toolbar-group">
            <button className="btn btn-primary" onClick={importData}>
              Import Data
            </button>
            <button className="btn btn-primary" onClick={saveData}>
              Export Data
            </button>
          </div>
        </div>
        <h1>CV Generator</h1>

        {Object.entries(sections).map(([key, section]) => (
          <CollapsibleSection
            key={key}
            title={section.title}
            defaultOpen={section.defaultOpen}
          >
            {section.render()}
          </CollapsibleSection>
        ))}
      </div>

      <div className="preview-section">
        <button className="btn btn-success preview-save" onClick={saveAsPDF}>
          Save as PDF
        </button>
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

import Project from "./Project";
import { initializeProject } from "../data/initializers";

export default function ProjectsList({ projects, setProjects }) {
  const addProject = () => {
    setProjects([...projects, initializeProject()]);
  };

  const updateProject = (id, updatedProject) => {
    setProjects(
      projects.map((project) => (project.id === id ? updatedProject : project))
    );
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <>
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
          setProject={(updatedProject) =>
            updateProject(project.id, updatedProject)
          }
          deleteProject={() => deleteProject(project.id)}
        />
      ))}
      <button type="button" onClick={addProject}>
        Add Project
      </button>
    </>
  );
}

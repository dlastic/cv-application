import Project from "./Project";
import { initializeProject } from "../state/initialState";
import useItemList from "../hooks/useItemList";

export default function ProjectsList({ projects, setProjects }) {
  const { addItem, updateItem, deleteItem } = useItemList(
    setProjects,
    initializeProject
  );

  return (
    <>
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
          setProject={(updatedProject) =>
            updateItem(project.id, updatedProject)
          }
          deleteProject={() => deleteItem(project.id)}
        />
      ))}
      <div className="list-actions">
        <button className="btn btn-outline" type="button" onClick={addItem}>
          Add Project
        </button>
      </div>
    </>
  );
}

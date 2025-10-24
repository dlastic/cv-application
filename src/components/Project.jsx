export default function Project({ project, setProject, deleteProject }) {
  return (
    <div className="project">
      <form>
        <label htmlFor={`project-${project.id}`}>Project Title</label>
        <input
          type="text"
          id={`project-${project.id}`}
          name="title"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
          placeholder="Enter project title"
        />

        <button type="button" onClick={deleteProject}>
          Delete
        </button>
      </form>
    </div>
  );
}

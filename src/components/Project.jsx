export default function Project({ project, setProject, deleteProject }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  return (
    <div className="project">
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor={`project-${project.id}`}>Project Title</label>
        <input
          type="text"
          id={`project-${project.id}`}
          name="title"
          value={project.title}
          onChange={handleChange}
          placeholder="Enter project title"
        />

        <div className="form-actions">
          <button
            className="btn btn-danger"
            type="button"
            onClick={deleteProject}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default function Skill({ skill, setSkill, deleteSkill }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill({ ...skill, [name]: value });
  };

  return (
    <div className="skill">
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor={`skill-${skill.id}`}>Skill</label>
        <input
          type="text"
          id={`skill-${skill.id}`}
          name="name"
          value={skill.name}
          onChange={handleChange}
          placeholder="Enter skill"
        />

        <div className="form-actions">
          <button
            className="btn btn-danger"
            type="button"
            onClick={deleteSkill}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

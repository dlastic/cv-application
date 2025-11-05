export default function Skill({ skill, setSkill, deleteSkill }) {
  return (
    <div className="skill">
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor={`skill-${skill.id}`}>Skill</label>
        <input
          type="text"
          id={`skill-${skill.id}`}
          name="skill"
          value={skill.name}
          onChange={(e) => setSkill({ ...skill, name: e.target.value })}
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

import "../styles/Skills.css";

export default function Skill({ skill, setSkill, deleteSkill }) {
  return (
    <div className="skill">
      <form>
        <label htmlFor={`skill-${skill.id}`}>Skill</label>
        <input
          type="text"
          id={`skill-${skill.id}`}
          name="skill"
          value={skill.name}
          onChange={(e) => setSkill({ ...skill, name: e.target.value })}
          placeholder="Enter skill"
        />

        <button type="button" onClick={deleteSkill}>
          Delete
        </button>
      </form>
    </div>
  );
}
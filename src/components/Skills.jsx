import "../styles/Skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <form>
        <label htmlFor="skill">Skill</label>
        <input type="text" id="skill" name="skill" />

        <button type="button">Delete</button>
        <button type="button">Add Skill</button>
      </form>
    </div>
  );
}

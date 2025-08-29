import "../styles/Languages.css";

export default function Languages() {
  return (
    <div className="languages">
      <h2>Languages</h2>
      <form>
        <label htmlFor="language">Language</label>
        <input type="text" id="language" name="language" />

        <label htmlFor="proficiency">Proficiency</label>
        <select id="proficiency" name="proficiency">
          <option value="elementary">Elementary proficiency</option>
          <option value="limited">Limited working proficiency</option>
          <option value="professional">Professional working proficiency</option>
          <option value="full">Full professional proficiency</option>
          <option value="native">Native or bilingual proficiency</option>
        </select>

        <button type="button">Delete</button>
        <button type="button">Add Language</button>
      </form>
    </div>
  );
}

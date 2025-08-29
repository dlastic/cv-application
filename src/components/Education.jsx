import "../styles/Education.css";

export default function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
      <form>
        <label htmlFor="institution">Institution</label>
        <input type="text" id="institution" name="institution" />

        <label htmlFor="degree">Degree</label>
        <input type="text" id="degree" name="degree" />

        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" name="start-date" />

        <label htmlFor="end-date">End Date</label>
        <input type="date" id="end-date" name="end-date" />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description"></textarea>

        <button type="submit">Add Education</button>
      </form>
    </div>
  );
}

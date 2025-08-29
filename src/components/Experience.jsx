import "../styles/Experience.css";

export default function Experience() {
  return (
    <div className="experience">
      <h2>Work Experience</h2>
      <form>
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" />

        <label htmlFor="job-title">Job Title</label>
        <input type="text" id="job-title" name="job-title" />

        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" name="start-date" />

        <label htmlFor="end-date">End Date</label>
        <input type="date" id="end-date" name="end-date" />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description"></textarea>

        <button type="button">Delete</button>
        <button type="button">Add Experience</button>
      </form>
    </div>
  );
}

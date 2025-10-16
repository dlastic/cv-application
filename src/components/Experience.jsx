import "../styles/Experience.css";

export default function Experience({
  experience,
  setExperience,
  deleteExperience,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  return (
    <div className="experience">
      <form>
        <label htmlFor={`company-${experience.id}`}>Company</label>
        <input
          type="text"
          id={`company-${experience.id}`}
          name="company"
          value={experience.company}
          onChange={handleChange}
        />

        <label htmlFor={`jobTitle-${experience.id}`}>Job Title</label>
        <input
          type="text"
          id={`jobTitle-${experience.id}`}
          name="jobTitle"
          value={experience.jobTitle}
          onChange={handleChange}
        />

        <label htmlFor={`startDate-${experience.id}`}>Start Date</label>
        <input
          type="text"
          id={`startDate-${experience.id}`}
          name="startDate"
          value={experience.startDate}
          onChange={handleChange}
        />

        <label htmlFor={`endDate-${experience.id}`}>End Date</label>
        <input
          type="text"
          id={`endDate-${experience.id}`}
          name="endDate"
          value={experience.endDate}
          onChange={handleChange}
        />

        <label htmlFor={`description-${experience.id}`}>Description</label>
        <textarea
          id={`description-${experience.id}`}
          name="description"
          value={experience.description}
          onChange={handleChange}
        ></textarea>

        <button type="button" onClick={deleteExperience}>
          Delete
        </button>
      </form>
    </div>
  );
}

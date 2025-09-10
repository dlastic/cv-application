import "../styles/Education.css";

export default function Education({
  education,
  setEducation,
  deleteEducation,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  return (
    <div className="education">
      <form>
        <label htmlFor={`institution-${education.id}`}>Institution</label>
        <input
          type="text"
          id={`institution-${education.id}`}
          name="institution"
          value={education.institution}
          onChange={handleChange}
        />

        <label htmlFor={`degree-${education.id}`}>Degree</label>
        <input
          type="text"
          id={`degree-${education.id}`}
          name="degree"
          value={education.degree}
          onChange={handleChange}
        />

        <label htmlFor={`startDate-${education.id}`}>Start Date</label>
        <input
          type="date"
          id={`startDate-${education.id}`}
          name="startDate"
          value={education.startDate}
          onChange={handleChange}
        />

        <label htmlFor={`endDate-${education.id}`}>End Date</label>
        <input
          type="date"
          id={`endDate-${education.id}`}
          name="endDate"
          value={education.endDate}
          onChange={handleChange}
        />

        <label htmlFor={`description-${education.id}`}>Description</label>
        <textarea
          id={`description-${education.id}`}
          name="description"
          value={education.description}
          onChange={handleChange}
        ></textarea>

        <button type="button" onClick={deleteEducation}>
          Delete
        </button>
      </form>
    </div>
  );
}

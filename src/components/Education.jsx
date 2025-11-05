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
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor={`institution-${education.id}`}>Institution</label>
        <input
          type="text"
          id={`institution-${education.id}`}
          name="institution"
          value={education.institution}
          onChange={handleChange}
          placeholder="Enter institution name"
        />

        <label htmlFor={`degree-${education.id}`}>Degree</label>
        <input
          type="text"
          id={`degree-${education.id}`}
          name="degree"
          value={education.degree}
          onChange={handleChange}
          placeholder="Enter degree"
        />

        <label htmlFor={`startDate-${education.id}`}>Start Date</label>
        <input
          type="text"
          id={`startDate-${education.id}`}
          name="startDate"
          value={education.startDate}
          onChange={handleChange}
          placeholder="Enter start date"
        />

        <label htmlFor={`endDate-${education.id}`}>End Date</label>
        <input
          type="text"
          id={`endDate-${education.id}`}
          name="endDate"
          value={education.endDate}
          onChange={handleChange}
          placeholder="Enter end date"
        />

        <div className="form-actions">
          <button
            className="btn btn-danger"
            type="button"
            onClick={deleteEducation}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

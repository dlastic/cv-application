import "../styles/CVDisplay.css";

export default function CVDisplay({ info, experiences }) {
  return (
    <div className="cv-display">
      <h2>Preview</h2>

      <div className="personal-info">
        <h2>{info.name}</h2>
        <p>{info.email}</p>
        <p>{info.phone}</p>
        <p>{info.address}</p>
      </div>

      <div className="experience">
        <h2>Work Experience</h2>
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <h3>{exp.jobTitle}</h3>
            <h4>{exp.company}</h4>
            <p>
              {exp.startDate} - {exp.endDate}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <button>Download PDF</button>
    </div>
  );
}

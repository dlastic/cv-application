import "../styles/CVDisplay.css";

export default function CVDisplay({
  info,
  experiences,
  educations,
  skills,
  languages,
}) {
  const proficiencyMap = {
    elementary: "Elementary proficiency",
    limited: "Limited working proficiency",
    professional: "Professional working proficiency",
    full: "Full professional proficiency",
    native: "Native or bilingual proficiency",
  };

  return (
    <div className="cv-display">
      <h2>Preview</h2>

      <div className="personal-info">
        <h2>{info.name}</h2>
        <p>{info.email}</p>
        <p>{info.phone}</p>
        <p>{info.address}</p>
      </div>

      <div className="experience-list">
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

      <div className="education-list">
        <h2>Education</h2>
        {educations.map((edu) => (
          <div key={edu.id} className="education-item">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p>
              {edu.startDate} - {edu.endDate}
            </p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>

      <div className="skills-list">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
      </div>

      <div className="languages-list">
        <h2>Languages</h2>
        <ul>
          {languages.map((language) => (
            <li key={language.id}>
              {language.lang} - {proficiencyMap[language.proficiency]}
            </li>
          ))}
        </ul>
      </div>

      <button>Download PDF</button>
    </div>
  );
}

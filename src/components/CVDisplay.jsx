import "../styles/CVDisplay.css";
import { MapPin, Phone, Mail } from "lucide-react";

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
    <div className="cv">
      <header className="cv-header">
        <div className="info">
          <h1>{info.name}</h1>
          <div className="contact-info">
            <p>
              <MapPin size={16} className="inline mr-1" />
              {info.address}
            </p>
            <p>
              <Phone size={16} className="inline mr-1" />
              {info.phone}
            </p>
            <p>
              <Mail size={16} className="inline mr-1" />
              {info.email}
            </p>
          </div>
        </div>
      </header>

      <main className="cv-main">
        <section className="left-column">
          <div className="cv-experience">
            <h2>Professional Experience</h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <h3>{exp.jobTitle}</h3>
                <h4>{exp.company}</h4>
                <p className="cv-date">
                  {exp.startDate} – {exp.endDate}
                </p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="cv-education">
            <h2>Education</h2>
            {educations.map((edu) => (
              <div key={edu.id} className="education-item">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p className="cv-date">
                  {edu.startDate} – {edu.endDate}
                </p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="right-column">
          <div className="cv-skills">
            <h2>Skills and Abilities</h2>
            <ul>
              {skills.map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
            </ul>
          </div>

          <div className="cv-languages">
            <h2>Languages</h2>
            <ul>
              {languages.map((language) => (
                <li key={language.id}>
                  {language.lang} – {proficiencyMap[language.proficiency]}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

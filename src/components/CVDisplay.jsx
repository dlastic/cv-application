import "../styles/CVDisplay.css";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function hasValues(obj) {
  return Object.entries(obj).some(
    ([key, value]) =>
      key !== "id" && typeof value === "string" && value.trim() !== ""
  );
}

function hasAnyFilled(arr) {
  return arr.some((item) => hasValues(item));
}

function formatUrl(url) {
  if (!url) return "";
  return url.startsWith("http") ? url : `https://${url}`;
}

function renderBulletPoints(text) {
  if (!text) return null;
  return (
    <ul>
      {text.split("\n").map((line, index) => (
        <li key={index}>{line}</li>
      ))}
    </ul>
  );
}

export default function CVDisplay({
  info,
  experiences,
  educations,
  skills,
  languages,
}) {
  const iconsSize = 16;
  const proficiencyMap = {
    elementary: "Elementary proficiency",
    limited: "Limited working proficiency",
    professional: "Professional working proficiency",
    full: "Full professional proficiency",
    native: "Native or bilingual proficiency",
  };

  return (
    <div className="cv">
      {hasValues(info) && (
        <header className="cv-header">
          <div className="info">
            <h1>{info.name}</h1>
            <div className="contact-info">
              {info.address && (
                <p>
                  <MapPin size={iconsSize} />
                  {info.address}
                </p>
              )}
              {info.phone && (
                <p>
                  <Phone size={iconsSize} />
                  {info.phone}
                </p>
              )}
              {info.email && (
                <p>
                  <Mail size={iconsSize} />
                  {info.email}
                </p>
              )}
            </div>
            <div className="social-links">
              {info.linkedin && (
                <p>
                  <FaLinkedin size={iconsSize} />
                  <a
                    href={formatUrl(info.linkedin)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {info.linkedin}
                  </a>
                </p>
              )}
              {info.github && (
                <p>
                  <FaGithub size={iconsSize} />
                  <a
                    href={formatUrl(info.github)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {info.github}
                  </a>
                </p>
              )}
            </div>
          </div>
        </header>
      )}

      <main className="cv-main">
        <section className="left-column">
          {hasAnyFilled(experiences) && (
            <div className="cv-experience">
              <h2>Professional Experience</h2>
              {experiences.filter(hasValues).map((exp) => (
                <div key={exp.id} className="experience-item">
                  <h3>{exp.jobTitle}</h3>
                  <h4>{exp.company}</h4>
                  <p className="cv-date">
                    {exp.startDate} – {exp.endDate}
                  </p>
                  {renderBulletPoints(exp.description)}
                </div>
              ))}
            </div>
          )}

          {hasAnyFilled(educations) && (
            <div className="cv-education">
              <h2>Education</h2>
              {educations.filter(hasValues).map((edu) => (
                <div key={edu.id} className="education-item">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <p className="cv-date">
                    {edu.startDate} – {edu.endDate}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="right-column">
          {hasAnyFilled(skills) && (
            <div className="cv-skills">
              <h2>Skills and Abilities</h2>
              <ul>
                {skills.filter(hasValues).map((skill) => (
                  <li key={skill.id}>{skill.name}</li>
                ))}
              </ul>
            </div>
          )}

          {hasAnyFilled(languages) && (
            <div className="cv-languages">
              <h2>Languages</h2>
              <ul>
                {languages.filter(hasValues).map((language) => (
                  <li key={language.id}>
                    {language.lang} – {proficiencyMap[language.proficiency]}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

import Experience from "./Experience";
import { initializeExperience } from "../data/initializers";

export default function ExperienceList({ experiences, setExperiences }) {
  const addExperience = () => {
    setExperiences([...experiences, initializeExperience()]);
  };

  const updateExperience = (id, updatedExp) => {
    setExperiences(
      experiences.map((exp) => (exp.id === id ? updatedExp : exp))
    );
  };

  const deleteExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  return (
    <div className="experience-list">
      <h2>Work Experience</h2>
      {experiences.map((exp) => (
        <Experience
          key={exp.id}
          experience={exp}
          setExperience={(updatedExp) => updateExperience(exp.id, updatedExp)}
          deleteExperience={() => deleteExperience(exp.id)}
        />
      ))}
      <button type="button" onClick={addExperience}>
        Add Experience
      </button>
    </div>
  );
}

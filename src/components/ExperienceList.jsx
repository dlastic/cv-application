import Experience from "./Experience";

export default function ExperienceList({ experiences, setExperiences }) {
  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now(),
        company: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
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

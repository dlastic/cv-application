import Education from "./Education";

export default function EducationList({ educations, setEducations }) {
  const addEducation = () => {
    setEducations([
      ...educations,
      {
        id: Date.now(),
        institution: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const updateEducation = (id, updatedEdu) => {
    setEducations(educations.map((edu) => (edu.id === id ? updatedEdu : edu)));
  };

  const deleteEducation = (id) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  return (
    <div className="education-list">
      <h2>Education</h2>
      {educations.map((edu) => (
        <Education
          key={edu.id}
          education={edu}
          setEducation={(updatedEdu) => updateEducation(edu.id, updatedEdu)}
          deleteEducation={() => deleteEducation(edu.id)}
        />
      ))}
      <button type="button" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
}

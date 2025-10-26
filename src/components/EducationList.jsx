import Education from "./Education";
import { initializeEducation } from "../data/initializers";

export default function EducationList({ educations, setEducations }) {
  const addEducation = () => {
    setEducations([...educations, initializeEducation()]);
  };

  const updateEducation = (id, updatedEdu) => {
    setEducations(educations.map((edu) => (edu.id === id ? updatedEdu : edu)));
  };

  const deleteEducation = (id) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  return (
    <>
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
    </>
  );
}

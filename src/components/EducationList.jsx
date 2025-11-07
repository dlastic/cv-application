import Education from "./Education";
import { initializeEducation } from "../state/initialState";
import useItemList from "../hooks/useItemList";

export default function EducationList({ educations, setEducations }) {
  const { addItem, updateItem, deleteItem } = useItemList(
    setEducations,
    initializeEducation
  );

  return (
    <>
      {educations.map((edu) => (
        <Education
          key={edu.id}
          education={edu}
          setEducation={(updatedEdu) => updateItem(edu.id, updatedEdu)}
          deleteEducation={() => deleteItem(edu.id)}
        />
      ))}
      <div className="list-actions">
        <button
          className="btn btn-outline"
          type="button"
          onClick={addItem}
        >
          Add Education
        </button>
      </div>
    </>
  );
}

import Experience from "./Experience";
import { initializeExperience } from "../state/initialState";
import useItemList from "../hooks/useItemList";

export default function ExperienceList({ experiences, setExperiences }) {
  const { addItem, updateItem, deleteItem } = useItemList(
    setExperiences,
    initializeExperience
  );

  return (
    <>
      {experiences.map((exp) => (
        <Experience
          key={exp.id}
          experience={exp}
          setExperience={(updatedExp) => updateItem(exp.id, updatedExp)}
          deleteExperience={() => deleteItem(exp.id)}
        />
      ))}
      <div className="list-actions">
        <button
          className="btn btn-outline"
          type="button"
          onClick={addItem}
        >
          Add Experience
        </button>
      </div>
    </>
  );
}

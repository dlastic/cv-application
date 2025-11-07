import Skill from "./Skill";
import { initializeSkill } from "../state/initialState";
import useItemList from "../hooks/useItemList";

export default function SkillsList({ skills, setSkills }) {
  const { addItem, updateItem, deleteItem } = useItemList(
    setSkills,
    initializeSkill
  );

  return (
    <>
      {skills.map((skill) => (
        <Skill
          key={skill.id}
          skill={skill}
          setSkill={(updatedSkill) => updateItem(skill.id, updatedSkill)}
          deleteSkill={() => deleteItem(skill.id)}
        />
      ))}
      <div className="list-actions">
        <button className="btn btn-outline" type="button" onClick={addItem}>
          Add Skill
        </button>
      </div>
    </>
  );
}

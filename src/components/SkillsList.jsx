import Skill from "./Skill";
import { initializeSkill } from "../state/initialState";

export default function SkillsList({ skills, setSkills }) {
  const addSkill = () => {
    setSkills([...skills, initializeSkill()]);
  };

  const updateSkill = (id, updatedSkill) => {
    setSkills(skills.map((skill) => (skill.id === id ? updatedSkill : skill)));
  };

  const deleteSkill = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  return (
    <>
      {skills.map((skill) => (
        <Skill
          key={skill.id}
          skill={skill}
          setSkill={(updatedSkill) => updateSkill(skill.id, updatedSkill)}
          deleteSkill={() => deleteSkill(skill.id)}
        />
      ))}
      <div className="list-actions">
        <button className="btn btn-outline" type="button" onClick={addSkill}>
          Add Skill
        </button>
      </div>
    </>
  );
}

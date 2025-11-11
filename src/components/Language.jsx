import { PROFICIENCY_LEVELS } from "../constants/proficiencyLevels";

export default function Language({ language, setLanguage, deleteLanguage }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLanguage({ ...language, [name]: value });
  };

  return (
    <div className="languages">
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor={`language-${language.id}`}>Language</label>
        <input
          type="text"
          id={`language-${language.id}`}
          name="lang"
          value={language.lang}
          onChange={handleChange}
          placeholder="Enter language"
        />

        <label htmlFor={`proficiency-${language.id}`}>Proficiency</label>
        <select
          id={`proficiency-${language.id}`}
          name="proficiency"
          value={language.proficiency}
          onChange={handleChange}
        >
          <option value="" disabled hidden>
            Select proficiency
          </option>
          {Object.entries(PROFICIENCY_LEVELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <div className="form-actions">
          <button
            className="btn btn-danger"
            type="button"
            onClick={deleteLanguage}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

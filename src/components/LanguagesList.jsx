import Language from "./Language";
import { initializeLanguage } from "../data/initializers";

export default function LanguagesList({ languages, setLanguages }) {
  const addLanguage = () => {
    setLanguages([...languages, initializeLanguage()]);
  };

  const updateLanguage = (id, updatedLang) => {
    setLanguages(
      languages.map((lang) => (lang.id === id ? updatedLang : lang))
    );
  };

  const deleteLanguage = (id) => {
    setLanguages(languages.filter((lang) => lang.id !== id));
  };

  return (
    <>
      {languages.map((language) => (
        <Language
          key={language.id}
          language={language}
          setLanguage={(updatedLanguage) =>
            updateLanguage(language.id, updatedLanguage)
          }
          deleteLanguage={() => deleteLanguage(language.id)}
        />
      ))}
      <div className="list-actions">
        <button className="btn btn-outline" type="button" onClick={addLanguage}>
          Add Language
        </button>
      </div>
    </>
  );
}

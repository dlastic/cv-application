import Language from "./Language";

export default function LanguagesList({ languages, setLanguages }) {
  const addLanguage = () => {
    setLanguages([
      ...languages,
      { id: Date.now(), language: "", proficiency: "elementary" },
    ]);
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
    <div className="languages-list">
      <h2>Languages</h2>
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
      <button type="button" onClick={addLanguage}>
        Add Language
      </button>
    </div>
  );
}

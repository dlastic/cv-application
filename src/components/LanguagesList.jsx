import Language from "./Language";
import { initializeLanguage } from "../state/initialState";
import useItemList from "../hooks/useItemList";

export default function LanguagesList({ languages, setLanguages }) {
  const { addItem, updateItem, deleteItem } = useItemList(
    setLanguages,
    initializeLanguage
  );

  return (
    <>
      {languages.map((language) => (
        <Language
          key={language.id}
          language={language}
          setLanguage={(updatedLanguage) =>
            updateItem(language.id, updatedLanguage)
          }
          deleteLanguage={() => deleteItem(language.id)}
        />
      ))}
      <div className="list-actions">
        <button className="btn btn-outline" type="button" onClick={addItem}>
          Add Language
        </button>
      </div>
    </>
  );
}

export default function useItemList(setItems, createItem) {
  const addItem = () => {
    setItems((prev) => [...prev, createItem()]);
  };

  const updateItem = (id, updatedItem) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return { addItem, updateItem, deleteItem };
}

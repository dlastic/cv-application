import test from "node:test";
import assert from "node:assert/strict";
import useItemList from "./useItemList.js";

function createState(initial) {
  let state = initial;

  const setter = (updater) => {
    state = typeof updater === "function" ? updater(state) : updater;
  };

  const getState = () => state;

  return { setter, getState };
}

test("useItemList handles add, update, and delete flows", () => {
  const initial = [
    { id: "1", name: "Alpha" },
    { id: "2", name: "Beta" },
  ];
  const { setter, getState } = createState(initial);

  const createItem = () => ({ id: "3", name: "" });
  const { addItem, updateItem, deleteItem } = useItemList(setter, createItem);

  addItem();
  assert.equal(getState().length, 3);
  assert.deepEqual(getState().at(-1), { id: "3", name: "" });

  updateItem("2", { id: "2", name: "Beta (updated)" });
  assert.equal(getState()[1].name, "Beta (updated)");

  deleteItem("1");
  assert.equal(getState().length, 2);
  assert.deepEqual(
    getState().map((item) => item.id),
    ["2", "3"]
  );
});

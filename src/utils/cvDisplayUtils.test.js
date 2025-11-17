import test from "node:test";
import assert from "node:assert/strict";
import { hasValues, hasAnyFilled } from "./cvDisplayUtils.js";

test("hasValues returns false when only id or empty string is present", () => {
  assert.equal(hasValues({ id: "1" }), false);
  assert.equal(hasValues({ id: "1", name: "   " }), false);
});

test("hasValues returns true when any non-empty string is present", () => {
  assert.equal(hasValues({ id: "1", name: "Alice" }), true);
  assert.equal(hasValues({ id: "1", desc: "  ok  " }), true);
});

test("hasAnyFilled returns false with no valid objects in the array", () => {
  assert.equal(hasAnyFilled([]), false);
  assert.equal(hasAnyFilled([{}]), false);
  assert.equal(hasAnyFilled([{}, { id: "1" }]), false);
  assert.equal(hasAnyFilled([{ id: "1", name: "   " }, { id: "1" }]), false);
});

test("hasAnyFilled returns true when any valid object is present", () => {
  assert.equal(
    hasAnyFilled([{}, { id: "1" }, { id: "1", name: "Alice" }]),
    true
  );
  assert.equal(hasAnyFilled([{ id: "1", name: "Alice" }]), true);
});

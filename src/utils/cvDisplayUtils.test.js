import test from "node:test";
import assert from "node:assert/strict";
import { hasValues } from "./cvDisplayUtils.js";

test("hasValues returns false when only id or empty string is present", () => {
  assert.equal(hasValues({ id: "1" }), false);
  assert.equal(hasValues({ id: "1", name: "   " }), false);
});

test("hasValues returns true when any non-empty string is present", () => {
  assert.equal(hasValues({ id: "1", name: "Alice" }), true);
  assert.equal(hasValues({ id: "1", desc: "  ok  " }), true);
});

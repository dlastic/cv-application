import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { hasValues, hasAnyFilled, formatUrl } from "./cvDisplayUtils.js";

describe("hasValues", () => {
  test("returns false when only id or empty string is present", () => {
    assert.equal(hasValues({ id: "1" }), false);
    assert.equal(hasValues({ id: "1", name: "   " }), false);
  });

  test("returns true when any non-empty string is present", () => {
    assert.equal(hasValues({ id: "1", name: "Alice" }), true);
    assert.equal(hasValues({ id: "1", desc: "  ok  " }), true);
  });
});

describe("hasAnyFilled", () => {
  test("returns false with no valid objects in the array", () => {
    assert.equal(hasAnyFilled([]), false);
    assert.equal(hasAnyFilled([{}]), false);
    assert.equal(hasAnyFilled([{}, { id: "1" }]), false);
    assert.equal(hasAnyFilled([{ id: "1", name: "   " }, { id: "1" }]), false);
  });

  test("returns true when any valid object is present", () => {
    assert.equal(
      hasAnyFilled([{}, { id: "1" }, { id: "1", name: "Alice" }]),
      true
    );
    assert.equal(hasAnyFilled([{ id: "1", name: "Alice" }]), true);
  });
});

describe("formatUrl", () => {
  test("returns empty string", () => {
    assert.equal(formatUrl(), "");
    assert.equal(formatUrl(null), "");
  });

  test("returns unchanged URL", () => {
    assert.equal(formatUrl("https://linkedin.com"), "https://linkedin.com");
    assert.equal(formatUrl("https://github.com"), "https://github.com");
  });

  test("prepends URL with 'https://'", () => {
    assert.equal(formatUrl("linkedin.com"), "https://linkedin.com");
    assert.equal(formatUrl("github.com"), "https://github.com");
  });
});

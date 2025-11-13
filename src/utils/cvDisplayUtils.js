export function hasValues(obj) {
  return Object.entries(obj).some(
    ([key, value]) =>
      key !== "id" && typeof value === "string" && value.trim() !== ""
  );
}

export function hasAnyFilled(arr) {
  return arr.some((item) => hasValues(item));
}

export function formatUrl(url) {
  if (!url) return "";
  return url.startsWith("http") ? url : `https://${url}`;
}

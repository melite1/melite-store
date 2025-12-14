// src/utils/assetPath.js
export const assetPath = (file) => {
  // Handles GitHub Pages base (e.g. /melite-store/) and local dev (/)
  // Also supports if someone accidentally passes "/file.jpg"
  const clean = String(file || "").replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${clean}`;
};

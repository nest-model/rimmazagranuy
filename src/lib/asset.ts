/** Превращает относительный путь из content.ts в рабочий URL с учётом base. */
export const asset = (path?: string) => {
  if (!path) return '';
  if (/^(https?:|data:|blob:)/.test(path)) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
};

export function getTenantFromPath() {
  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);
  // Ex: parts = ["empresas", "wisify", "index.html"]
  // então tenant está em parts[1]
  return parts[1] || null;
}

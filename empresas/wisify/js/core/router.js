import { getTenantFromPath } from "./tenancy.js";
import { renderSidebar } from "../components/comuns/sidebar.js";

const user = JSON.parse(localStorage.getItem("user"));
const tenant = getTenantFromPath();

console.log("Router → tenant:", tenant, "user:", user);

if (!user || user.tenant !== tenant) {
  document.body.innerHTML = "<h1>Acesso não autorizado</h1>";
  throw new Error("Tenant inválido ou usuário logado pertence a outro tenant");
}

const routes = {
  analista: () => import("../setores/analista.js"),
  financeiro: () => import("../setores/financeiro.js"),
};

const sectorLoader = routes[user.cargo];

if (sectorLoader) {
  sectorLoader().then(module => {
    renderSidebar(document.getElementById("sidebar"), user);
    module.init(document.getElementById("main-container"), user);
  });
} else {
  document.body.innerHTML = "<h1>Cargo não autorizado</h1>";
}

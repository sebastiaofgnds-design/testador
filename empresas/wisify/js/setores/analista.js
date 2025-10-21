export async function init(container, user) {
  container.innerHTML = `
    <h2>Bem‑vindo ${user.nome}, cargo: ${user.cargo}</h2>
    <p>Área exclusiva para Analistas.</p>
  `;
}

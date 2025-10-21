export function renderSidebar(container, user) {
  container.innerHTML = `
    <aside>
      <h3>${user.tenant.toUpperCase()}</h3>
      <nav>
        <ul>
          <li><a href="dashboard.html">Dashboard</a></li>
          <li><a href="index.html" onclick="localStorage.clear()">Sair</a></li>
        </ul>
      </nav>
    </aside>
  `;
}

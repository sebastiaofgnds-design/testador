export async function fakeLogin(email, senha) {
  const users = [
    {
      id: 1,
      email: "joao@wisify.com",
      senha: "senha123",
      nome: "João da Silva",
      cargo: "analista",
      tenant: "wisify"
    },
    {
      id: 2,
      email: "maria@teste.com",
      senha: "senha456",
      nome: "Maria Souza",
      cargo: "financeiro",
      tenant: "teste"
    }
  ];

  return users.find(u => u.email === email && u.senha === senha) || null;
}

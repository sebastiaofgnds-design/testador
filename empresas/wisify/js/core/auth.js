import { getTenantFromPath } from './tenancy.js';
import { fakeLogin } from '../services/supabase.js';

export async function login(email, senha) {
  const user = await fakeLogin(email, senha);
  const tenant = getTenantFromPath();
  console.log("Tenant da URL:", tenant);
  console.log("Usuário encontrado:", user);

  if (!user || user.tenant !== tenant) {
    return false;
  }

  localStorage.setItem("user", JSON.stringify(user));
  return true;
}

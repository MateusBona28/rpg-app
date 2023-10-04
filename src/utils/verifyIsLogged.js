
export const verifyIsLogged = () => {
  const isLogged = localStorage.getItem('Z_TABLE_TOP_RPG_TOKEN');

  if (!isLogged) {
    return false;
  }

  return true;
}
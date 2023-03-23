
export const searchCep = async (input) => {
  const reposponse = await fetch(`https://viacep.com.br/ws/${input}/json`)
  return reposponse.json()
}
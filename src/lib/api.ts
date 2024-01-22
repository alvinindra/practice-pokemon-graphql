export const API_URL =
  "https://graphql-pokeapi.graphcdn.app/"

async function fetchAPI(query: string,
  variables?: Record<string, any>) {
  const headers = { "Content-Type": "application/json" }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error("Failed to fetch API")
  }
  return json.data
}
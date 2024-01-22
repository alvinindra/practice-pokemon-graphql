import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Q_POKEMONS } from '@/lib/query'
import { useQuery } from '@apollo/client'
import Image from 'next/image'

export default function ListPokemon() {
  const { data, loading, error } = useQuery(Q_POKEMONS, {
    variables: { limit: 8, offset: 0 },
  })
  if (loading) return <div>Loading...</div>
  if (error) return `Error! ${error.message}`

  console.log('Response from server', data)
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.pokemons?.results.map((pokemon: any) => (
          <Card key={pokemon.name}>
            <CardHeader>
              <CardTitle className="capitalize text-base text-center">
                {pokemon.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={pokemon.artwork}
                width={150}
                height={150}
                alt={pokemon.name}
                priority
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

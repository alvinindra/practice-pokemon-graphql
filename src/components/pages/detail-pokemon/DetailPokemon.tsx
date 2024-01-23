import { Badge } from '@/components/ui/badge'
import { Q_DETAIL_POKEMON } from '@/lib/query'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function DetailPokemon({ id }: { id: number }) {
  const { data, loading, error } = useQuery(Q_DETAIL_POKEMON, {
    variables: { id: id },
  })
  const router = useRouter()

  if (loading) return <div>Loading...</div>
  if (error) console.error(`Error! ${error.message}`)

  return (
    <div className="flex flex-col gap-4 mt-5">
      <Link
        className="border-b border-transparent hover:border-white max-w-min flex-shrink-0 hover:border-b hover:border-solid"
        href="/"
      >
        Back
      </Link>
      <h1 className="text-white text-4xl font-bold capitalize text-center">
        {data?.pokemon_v2_pokemon_by_pk.name}
      </h1>
      <div className="mx-auto">
        <Image
          src={
            data.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemonsprites[0].sprites
              .front_default
          }
          width={150}
          height={150}
          alt={data.pokemon_v2_pokemon_by_pk.name}
          priority
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Type</h2>
          <p className="text-sm capitalize gap-2 flex flex-wrap">
            {data.pokemon_v2_pokemon_by_pk?.pokemon_v2_pokemontypes?.map(
              (type: any) => (
                <Badge
                  key={type.pokemon_v2_type.name}
                  variant={type.pokemon_v2_type.name}
                >
                  {type.pokemon_v2_type.name}
                </Badge>
              )
            )}
          </p>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Abilities</h2>
          <p className="text-sm gap-2 flex flex-wrap capitalize">
            {data.pokemon_v2_pokemon_by_pk?.pokemon_v2_pokemonabilities?.map(
              (ability: any) => (
                <Badge key={ability.pokemon_v2_ability.name}>
                  {ability.pokemon_v2_ability.name}
                </Badge>
              )
            )}
          </p>
        </div>
        <div className="space-y-1 col-span-2">
          <h2 className="text-lg font-semibold">Base Stats</h2>
          <table className="text-sm w-full">
            <tr>
              <td width="50%">
                <tr>
                  <td>Hp</td>
                  <td>
                    :{' '}
                    {
                      data.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemonstats[0]
                        .base_stat
                    }
                  </td>
                </tr>
                <tr>
                  <td>Atk</td>
                  <td>
                    :{' '}
                    {
                      data.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemonstats[1]
                        .base_stat
                    }
                  </td>
                </tr>
                <tr>
                  <td>Def</td>
                  <td>
                    :{' '}
                    {
                      data.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemonstats[2]
                        .base_stat
                    }
                  </td>
                </tr>
              </td>
              <td>
                <tr>
                  <td>SpA</td>
                  <td>
                    :{' '}
                    {
                      data.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemonstats[3]
                        .base_stat
                    }
                  </td>
                </tr>
                <tr>
                  <td>SpD</td>
                  <td>
                    :{' '}
                    {
                      data.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemonstats[4]
                        .base_stat
                    }
                  </td>
                </tr>
                <tr>
                  <td>SPE</td>
                  <td>
                    :{' '}
                    {
                      data.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemonstats[5]
                        .base_stat
                    }
                  </td>
                </tr>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

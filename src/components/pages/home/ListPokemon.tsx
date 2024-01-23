import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Spotlight, { SpotlightCard } from '@/components/ui/spotlight'
import { Q_POKEMONS } from '@/lib/query'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'

export default function ListPokemon() {
  const { data, error, fetchMore } = useQuery(Q_POKEMONS, {
    variables: { limit: 8, offset: 0 },
  })
  const router = useRouter()

  if (error) console.error(`Error! ${error.message}`)

  return (
    <div className="flex flex-col gap-4 mt-5">
      <InfiniteScroll
        pageStart={0}
        loadMore={() =>
          fetchMore({
            variables: {
              offset: data?.pokemon_v2_pokemon?.length,
            },
          })
        }
        hasMore={true}
        loader={
          <div className="mx-auto text-center col-span-2 loader mt-4" key={0}>
            Loading ...
          </div>
        }
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data?.pokemon_v2_pokemon?.map((pokemon: any) => (
            <Spotlight key={pokemon.id}>
              <SpotlightCard
                className="cursor-pointer"
                onClick={() => router.push(`/${pokemon.name}/${pokemon.id}`)}
              >
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-slate-700 rounded-full border border-neutral-200 blur-[80px]"></div>
                </div>
                <CardHeader>
                  <CardTitle className="capitalize text-base text-center">
                    {pokemon.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={
                      pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default
                    }
                    width={150}
                    height={150}
                    alt={pokemon.name}
                    priority
                  />
                </CardContent>
              </SpotlightCard>
            </Spotlight>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}

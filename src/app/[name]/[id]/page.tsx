'use client'

import DetailPokemon from '@/components/pages/detail-pokemon/DetailPokemon'

export default function DetailPokemonPage({
  params,
}: {
  params: { id: number }
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="py-[80px] relative flex place-items-center my-auto flex-col">
        <DetailPokemon id={params.id} />
      </div>
    </main>
  )
}

'use client'

import ListPokemon from '@/components/pages/home/ListPokemon'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="py-[80px] relative flex place-items-center my-auto flex-col">
        <h1 className="text-white text-4xl font-bold">Pokédex</h1>
        <ListPokemon />
      </div>
    </main>
  )
}

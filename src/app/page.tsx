"use client"

import useSWR from 'swr'
import { useState } from 'react'
import DynamicList from "@/components/DynamicList"
import ShoppingList from '@/components/ShoppingList'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export type ListItem = {
  name: string,
  isComplete: boolean
}


export default function Home() {
  const [query, setQuery] = useState('')
  const queryResults = useSWR<string[]>(() => { return query.length > 1 && `https://api.frontendeval.com/fake/food/${query}`}, fetcher, { dedupingInterval: 500 })

  return (
    <main className="flex flex-col items-center pt-20 min-h-screen">
      <h1 className='text-5xl'>My Shopping List</h1>
      <div className="w-52">
          <input type="text" className="border-2 border-solid border-stone-800 p-2 mt-8 w-full" onChange={(e) => setQuery(e.target.value)} />
          <div className="relative w-full">
            <DynamicList {...queryResults}/>
          </div>
        <ShoppingList />
      </div>
    </main>
  )
}
``
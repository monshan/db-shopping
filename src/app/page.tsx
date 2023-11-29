"use client"

import useSWR from 'swr'
import { useState } from 'react'
import DynamicList from "@/components/DynamicList"
import ShoppingList from '@/components/ShoppingList'

const fetcher = (...args) => fetch(...args).then(res => res.json())


export type ListItems = {
  name: string,
  quantity: number,
  isComplete: boolean
}


export default function Home() {
  const [query, setQuery] = useState('')
  const queryResults = useSWR(() => { return query.length > 1 && `https://api.frontendeval.com/fake/food/${query}`}, fetcher, { dedupingInterval: 500 })

  // const inputHandler = (e) => setQuery(e.target.value)
    
  return (
    <main className="flex flex-col items-center pt-20 min-h-screen">
      <h1 className='text-5xl'>My Shopping List</h1>
      <input type="text" className="border-2 border-solid border-stone-800 p-2 mt-8" onChange={(e) => setQuery(e.target.value)} />
      {/* <DynamicList {...queryResults}/> */}
      <ShoppingList />
    </main>
  )
}
``
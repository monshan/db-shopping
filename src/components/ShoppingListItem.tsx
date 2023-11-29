"use client"

import { useState } from "react"
import { ListItem } from "@/app/page"
import { useShoppingList } from "./ShoppingListContext"

export default function ShoppingListItem({ name, isComplete}: ListItem) {
    const { listItems, setListItems } = useShoppingList()
    const [completed, setCompleted] = useState<boolean>(isComplete)
    
    const toggleComplete = () => {
        let target = listItems.find((item: ListItem) => item.name === name)
        if (target) {
            target.isComplete = !target.isComplete
        }
        setCompleted(!completed)
        setListItems(listItems)
    }

    const removeItem = () => {
        const afterRemove = listItems.filter((item: ListItem) => item.name !== name)
        setListItems(afterRemove)
    }

    return (
        <li key={name} className={`flex gap-2 items-center ${ completed && "text-zinc-400" }`}>
            <button onClick={toggleComplete}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <p className={`${completed && "line-through"}`}>{name}</p>
            <button onClick={removeItem} className="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </li>
    )
}
"use client"

import React, { useContext, createContext, useState } from "react"
import { ListItems } from "@/app/page"

type ShoppingListContextType = {
    listItems: ListItems,
    setListItems: React.Dispatch<React.SetStateAction<ListItems>>
}

type ShoppingListContextProps = {
    children: React.ReactNode
}

export const ShoppingListContextTheme = createContext<ShoppingListContextType | null>(null)

export default function ShoppingListContext({ children }: ShoppingListContextProps) {
    // DUMMY STATE
    const [listItems, setListItems] = useState<Array<ListItems>>([{ name: "apple", quantity: 1, isComplete: false }])
    
    return (
        <ShoppingListContextTheme.Provider value={{ listItems, setListItems }}>
            {children}
        </ShoppingListContextTheme.Provider>
    )
}

export function useShoppingList() {
    const context = useContext(ShoppingListContextTheme)
    if (context === undefined) {
        throw new Error("useShoppingList must be used within a ShoppingListContext")
    }

    return context
}
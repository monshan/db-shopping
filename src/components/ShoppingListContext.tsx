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

export const ShoppingListTheme = createContext<ShoppingListContextType | null>(null)

export default function ShoppingListContext({ children }: ShoppingListContextProps) {
    // DUMMY DATA
    const [listItems, setListItems] = useState<ListItems>({ "milk": {quantity: 1, isComplete: false }})
    
    return (
        <ShoppingListTheme.Provider value={{ listItems, setListItems }}>
            {children}
        </ShoppingListTheme.Provider>
    )
}

export function useShoppingList() {
    const context = useContext(ShoppingListTheme)
    if (context === undefined) {
        throw new Error("useShoppingList must be used within a ShoppingListContext")
    }

    return context
}
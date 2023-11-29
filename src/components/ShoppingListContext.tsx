"use client"

import React, { useContext, createContext, useState } from "react"
import { ListItem } from "@/app/page"

type ShoppingListContextType = {
    listItems: ListItem[],
    setListItems: React.Dispatch<React.SetStateAction<ListItem[]>>
}

type ShoppingListContextProps = {
    children: React.ReactNode
}

export const ShoppingListContextTheme = createContext<ShoppingListContextType | null>(null)

export default function ShoppingListContext({ children }: ShoppingListContextProps) {
    const [listItems, setListItems] = useState<ListItem[]>([])
    
    return (
        <ShoppingListContextTheme.Provider value={{ listItems, setListItems }}>
            {children}
        </ShoppingListContextTheme.Provider>
    )
}

export function useShoppingList() {
    const context = useContext(ShoppingListContextTheme)
    if (!context) {
        throw new Error("useShoppingList must be used within a ShoppingListContext")
    }

    return context;
}
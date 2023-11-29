import React from "react";
import ShoppingListItem from "./ShoppingListItem";
import { useShoppingList } from "./ShoppingListContext";
import { ListItem } from "@/app/page";

export default function ShoppingList() {
    const { listItems } = useShoppingList()
    
    return (
        <ul className="w-full">
            { listItems && listItems.map((item: ListItem) => <ShoppingListItem {...item} />)}
        </ul>
    );
}
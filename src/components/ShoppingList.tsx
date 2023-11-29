import React from "react";
import ShoppingListItem from "./ShoppingListItem";
import { useShoppingList } from "./ShoppingListContext";
import { ListItemProps } from "@/app/page";

export default function ShoppingList() {
    const { listItems } = useShoppingList()
    
    return (
        <ul className="w-52">
            { Object.entries(listItems).map(([item, itemProps]) => <ShoppingListItem item={item} {...itemProps} />) }
        </ul>
    );
}
import React from "react";
import ShoppingListItem from "./ShoppingListItem";
import { ListItems } from "@/app/page";

export default function ShoppingList({ listItems, setListItems }: { listItems: ListItems, setListItems: Function }) {
    return (
        <ul className="w-52">
            { Object.entries(listItems).map(([item, itemProps]) => <ShoppingListItem listItems={listItems} item={item} {...itemProps} setListItems={setListItems} />) }
        </ul>
    );
}
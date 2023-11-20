"use client"

import { ListItems } from "@/app/page"

export default function ShoppingListItem({ item, quantity, isComplete, setListItems, listItems }: { item: string, quantity: number, isComplete: boolean, setListItems: Function, listItems: ListItems}) {
    const increaseQuantity = () => {
        listItems[item].quantity++
        setListItems({...listItems})
    }

    const decreaseQuantity = () => {
        listItems[item].quantity--
        setListItems({...listItems})
    }

    const toggleComplete = () => {
        setListItems({...listItems, [item]: { quantity, isComplete: !isComplete }})
    }

    const removeItem = () => {
        delete listItems[item]
        setListItems({...listItems})
    }

    return (<li key={item} data-name={item} className="flex justify-auto gap-2 w-full">
    <button onClick={toggleComplete}>✅</button>
    <p className={`${isComplete && "line-through"}`}>{item}</p>
    <div className="flex gap-1 items-center">
        <span onClick={increaseQuantity}>+</span>
        <p>{quantity}</p>
        <span onClick={decreaseQuantity}>-</span>
    </div>
    <button onClick={removeItem} className="justify-self-end">❌</button>
    </li>)
}
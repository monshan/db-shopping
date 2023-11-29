
import { useShoppingList } from "./ShoppingListContext"
import { MouseEvent } from "react"

export default function DynamicList({ data, error, isLoading }: { data: string[] | undefined, error: Error, isLoading: boolean }) {
    const { listItems, setListItems } = useShoppingList()

    const clickHandler = (e: MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        const name = target.getAttribute("data-name") || ""
        setListItems([...listItems, { name, isComplete: false }])
    }

    const renderOptions = () => {
        if (isLoading) return <li>Loading...</li>
        if (error) return <li>Unable to load options</li>
        if (data) {
            if (!data.length) {
                return <li>No results found</li>
            } else {
                return data.map((item: string, index: number) => <li key={index} data-name={item} onClick={clickHandler} className="hover:bg-blue-500 hover:text-white px-2">
                {item}
                </li>)
            }
        }
    }

    return (
        <ul className="flex flex-col absolute gap-1 overflow-y-scroll z-10 max-h-36 w-full bg-white">
            { renderOptions() }
        </ul>
    )
}


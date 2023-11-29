import { useShoppingList } from "./ShoppingListContext"

export default function DynamicList({ data, error, isLoading }: { data: string[] | undefined, error: Error, isLoading: boolean }) {
    const { listItems, setListItems } = useShoppingList()

    const clickHandler = (e) => {
        setListItems([...listItems, { name: e.target.dataset.name, isComplete: false }])
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
        <ul className="flex flex-col gap-1 overflow-y-scroll z-10">
            { renderOptions() }
        </ul>
    )
}


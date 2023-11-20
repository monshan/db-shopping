import { ListItems } from "@/app/page"

export default function DynamicList({ queryData, setListItems, listItems, isLoading }: { queryData: string[], setListItems: Function, listItems: ListItems, isLoading: boolean }) {
    const clickHandler = (e) => {
        setListItems({...listItems, [e.target.dataset.name]: { quantity: 1, isComplete: false }})
    }

    return (
        <ul className="flex flex-col gap-1 overflow-y-scroll z-10">
            { queryData && queryData.map((item: string, index: number) => <li key={index} data-name={item} onClick={clickHandler} className="hover:bg-blue-500 hover:text-white px-2">
            {item}
            </li>) }
        </ul>
    )
}


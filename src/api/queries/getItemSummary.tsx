//import type interface
//The shape of item summary
import type { ItemSummary } from "../types/ItemSummary"

type MenuResponse = ItemSummary[]

export async function getItemSummary(): Promise<ItemSummary[]> {
    const res = await fetch("/data/menu.json");

    if(!res.ok) {
        throw new Error("Failed to fetch menu")
    }
    const data = (await res.json()) as MenuResponse
    return (data)

}
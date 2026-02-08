import type { Item } from "@/api/types/Item";

export default async function getItem (id: string): Promise<Item> {
    const response = await fetch("/data/menu.json");
    //type data as array of items
    const data: Item[] = await response.json();
    
    //Find one match
    //This can fail and return undefined so include error handling!
    const item = data.find((item) => item.id === id);

    if(!item){
        throw new Error(`item with ${id} not found`)
    }

    return item

}
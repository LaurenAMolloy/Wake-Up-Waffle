//import tyep interface
import type { ItemSummary } from "../../api/types/ItemSummary";
//import fetching function
import { getItemSummary } from "../../api/queries/getItemSummary";

export interface MenuLoaderResult {
    menuItems : ItemSummary[]
}

export async function menuLoader() {
    const menuItems = await getItemSummary();

    return {
        menuItems
    }

}
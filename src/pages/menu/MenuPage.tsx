import type { MenuLoaderResult } from "./menuLoader";
import { useLoaderData } from "react-router";
import MenuCard from "../../components/MenuCard";

export default function MenuPage() {
  const { menuItems } = useLoaderData() as MenuLoaderResult;
  console.log(menuItems)
  //map over menu items
  const renderedItems = menuItems.map((item) => {
    return <MenuCard key={item.id} item={item} />
  })

  return (
    <div className="grid gap-4 sm:grid-cols-2 p-10">
      {renderedItems}
    </div>
  )
}

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
    <div className="pt-5">
      <h1 className="text-center text-3xl text-[#44403c]">Explore Our Delicious Menu</h1>
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 p-10">
      {renderedItems}
    </div>
    </div>
    
  )
}

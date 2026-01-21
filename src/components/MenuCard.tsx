import { Link } from 'react-router';
import type { ItemSummary } from "../api/types/ItemSummary";

type MenuCardProps = {
    item: ItemSummary
}

export default function MenuCard({ item }: MenuCardProps ) {
  return (
    <article className="flex flex-col gap-3 bg-[#ffffff] rounded-2xl p-3 shadow ">
        <img className="rounded-2xl" src={item.image}></img>
        <h3>{item.name}</h3>
        <p>£{item.price}</p>
        <Link to={`/details/${item.id}`}>More Details</Link>
    </article>
  )
}

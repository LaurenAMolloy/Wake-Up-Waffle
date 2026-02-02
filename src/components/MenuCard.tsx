import { Link } from 'react-router';
import type { ItemSummary } from "../api/types/ItemSummary";

type MenuCardProps = {
    item: ItemSummary
}

export default function MenuCard({ item }: MenuCardProps ) {
  return (
    <article className="flex flex-col h-full bg-[#ffffff] rounded-2xl p-3 shadow-xl/20 ">
        <img className=" w-full aspect-4/3 rounded-2xl object-cover object-center"  src={item.image} alt={item.name}></img>
        <h3>{item.name}</h3>
        <p className="font-bold">£{item.price}</p>
        <Link className='bg-[#c9a24d] mt-auto rounded-2xl text-center p-2 hover:bg-[#b8943f]' to={`/details/${item.id}`}>More Details</Link>
    </article>
  )
}

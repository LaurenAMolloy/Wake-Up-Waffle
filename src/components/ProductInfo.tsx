
type ProductInfoProps = {
  name: string,
  description: string,
  price: number,
}

export default function ProductInfo({ name, description, price } : ProductInfoProps) {
  return (
    <div className="flex flex-col bg-[#ffffff] rounded-2xl shadow p-3 gap-3">
      <h3 className="font-extrabold text-2xl">{name}</h3>
      <p>{description}</p>
      <p className="font-extrabold">£{price}</p>
    </div>
  )
}

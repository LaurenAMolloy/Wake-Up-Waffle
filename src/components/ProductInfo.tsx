type ProductInfoProps = {
  name: string,
  description: string,
  price: string,
}

export default function ProductInfo({ name, description, price } : ProductInfoProps) {
  return (
    <div className="flex flex-col bg-[#ffffff] rounded-2xl shadow p-3">
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  )
}

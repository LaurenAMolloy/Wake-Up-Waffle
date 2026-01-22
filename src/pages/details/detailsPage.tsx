import { useLoaderData } from 'react-router-dom';
import type { DetailsLoaderResult} from './detailsLoader'
import ProductGallery from '../../components/ProductGallery';
import ProductInfo from '../../components/ProductInfo';
import AddToCartSection from '../../components/AddToCartSection';

export default function DetailsPage() {
  const { item } = useLoaderData() as DetailsLoaderResult
  //console.log(item)
  const { 
    id,
    image,
    name,
    description,
    price,
  } = item

  return (
    <div className="container flex flex-col px-10 items-center mt-10 gap-3">
      <ProductGallery image={image} name={name} />
      <ProductInfo
      name={name}
      description={description}
      price={price}  />
      <AddToCartSection 
      id={id}
      price={price}
      name={name} />
    </div>
  )
}

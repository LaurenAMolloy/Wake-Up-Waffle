import { useLoaderData } from 'react-router-dom';
import type { DetailsLoaderResult} from './detailsLoader'
import ProductGallery from '../../components/ProductGallery';
import ProductInfo from '../../components/ProductInfo';
import AddToCartSection from '../../components/AddToCartSection';

export default function DetailsPage() {
  const { item } = useLoaderData() as DetailsLoaderResult
  //console.log(item)
  const { 
    image,
    name,
    description,
    price,
  } = item

  return (
    <div className="container flex flex-col px-10 items-center mt-10 gap-3">
      <ProductGallery
      name={name}
      image={image} />
      <ProductInfo
      name={name}
      description={description}
      price={price}  />
      <AddToCartSection product={item} />
    </div>
  )
}

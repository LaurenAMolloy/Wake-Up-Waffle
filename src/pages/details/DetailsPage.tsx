import { useLoaderData } from 'react-router-dom';
import type { DetailsLoaderResult} from '@/pages/details/detailsLoader'
import ProductGallery from '@/components/ProductGallery';
import ProductInfo from '@/components/ProductInfo';
import AddToCartSection from '@/components/AddToCartSection';

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
    <div className="container flex flex-col md:flex-row md:gap-10 justify-center items-center mt-10 mb-10 px-5 gap-3">
      <div className='flex flex-col'>
      <ProductGallery
      name={name}
      image={image} />
      </div>
      <div className="flex flex-col gap-5">
        <ProductInfo
        name={name}
        description={description}
        price={price}  />
        <AddToCartSection product={item} />
      </div>
    </div>
  )
}

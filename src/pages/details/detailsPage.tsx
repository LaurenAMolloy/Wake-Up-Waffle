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

  //Add Modal here too!
  //Modal steps
  //parent owns open close state
  //pass to modal as props
  //useEffect can control overflowhidden?
  //use inset to position the modal 
  //portal what is there is two?
  //reuse existing modal

  return (
    <div className="container flex flex-col md:flex-row md:gap-10 justify-center items-center mt-10 mb-10 gap-3">
      <div className='flex flex-col'>
      <ProductGallery
      name={name}
      image={image} />
      </div>
      <div className="flex flex-col gap-5 w-100">
        <ProductInfo
        name={name}
        description={description}
        price={price}  />
        <AddToCartSection product={item} />
      </div>
    </div>
  )
}

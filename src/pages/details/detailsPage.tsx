import { useLoaderData } from 'react-router-dom';
import type { DetailsLoaderResult} from './detailsLoader'

export default function DetailsPage() {
  const { item } = useLoaderData() as DetailsLoaderResult
  console.log(item)
  return (
    <div className="container mx-auto py-10">
    </div>
  )
}

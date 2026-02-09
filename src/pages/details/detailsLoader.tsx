import type { Item } from '@/api/types/Item';
import getItem from '@/api/queries/getItem';
import type { Params } from 'react-router-dom';

interface LoaderArgs {
    params: Params;
}

export interface DetailsLoaderResult {
    item: Item
}


export default async function detailsLoader({ params } : LoaderArgs): Promise<DetailsLoaderResult> {

   const id = params.id;

   if(!id) {
    throw new Error("Id must be provided")
   }

   const item = await getItem(id);
  
  //return the object
  return { 
    item
  }
}

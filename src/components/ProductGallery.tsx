type ProductGalleryProps = {
    image: string;
    name: string;
}

export default function ProductGallery({ image, name }: ProductGalleryProps) {
  return (
        <img className="rounded-2xl" src={image} alt={name}></img>
  )
}

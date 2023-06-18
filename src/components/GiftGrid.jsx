
import { GifItem } from "./GifItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({category}) => {

    const {images, isLoading } = useFetchGifs( category );
      
    return (
    <>
        <h3>{category}</h3>

        {
            isLoading && (<h3>Is Loading....</h3>)
        }
        <div className="card-grid">
            {
            images.map( ( image )  => (
                <GifItem
                    key={image.id}
                    {...image}
                />
            ))
            }
        </div>  
    </>
  )
}

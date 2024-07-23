
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category );
    

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className="card-grid">
                {
                    images.map(image => (
                        <div className="card" key={image.id}>
                            <img alt={image.title} src={image.url}/>
                            <p>{image.title}</p>
                        
                        </div>
                    ))
                }
            </div>
            {/* gifs.map() */}
        </>
    )
}
import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Aguanta que queda poco!</p>}

                { <div className="card-grid">
                    {
                        images.map( (img) =>( //de esta manera podemos listar cada elemento por si id y su titulo
                            <GifGridItem
                                key = {img.id} 
                                { ...img }
                            />
                        ))
                    }
                </div> }
        </>
    )
}

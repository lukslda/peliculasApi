import React from "react";
import Pelicula from "./Pelicula";
import { PeliculasConsumer } from "../context/PeliculasContext";


const ListaPeliculas = () => {
    return ( 
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <PeliculasConsumer>
                {(value) => {
                    return value.peliculas.map(pelicula  => (
                        <Pelicula 
                            key = {pelicula.id}
                            pelicula = {pelicula}
                            
                        />
                    ))
                }}
            </PeliculasConsumer>
        </div>
     );
}

export default ListaPeliculas;
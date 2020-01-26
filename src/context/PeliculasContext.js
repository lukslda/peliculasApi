import React, { Component } from 'react';

import axios from 'axios';


const PeliculasContext = React.createContext();
export const PeliculasConsumer = PeliculasContext.Consumer;

class PeliculasProvider extends Component {
    
    api_key = '0960b997cb5a0845deecefa23b652777';

    state = { 
        peliculas : []
     }

    obtenerPelicuas = async (busqueda) => {

        let url = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&language=es-AR&query=${busqueda.nombre}&genre_ids=${busqueda.categoria}&page=1&include_adult=false`;

        // consultar la API con la URL
        const peliculas = await axios(url);

        // console.log(peliculas.data.results);
        this.setState({
            peliculas : peliculas.data.results
        })

    } // primary_release_year=${busqueda.ano}

    render() { 
        return ( 
            <PeliculasContext.Provider
                value={{
                    peliculas : this.state.peliculas,
                    obtenerPeliculas: this.obtenerPelicuas
                }}
            
            >
                {this.props.children}
            </PeliculasContext.Provider>
         );
    }
}
 
export default PeliculasProvider;

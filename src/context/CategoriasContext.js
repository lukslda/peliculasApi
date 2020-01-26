import React, { Component } from 'react';
import axios from 'axios';




//crear el context
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;


class CategoriasProvider extends Component {

    api_key = '0960b997cb5a0845deecefa23b652777';

    state = { 
        categorias : []
     }

    componentDidMount(){
        this.obtenerCategorias();
    }

    obtenerCategorias = async () => {
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}&language=es-AR`;

        let categorias = await axios.get(url);

        this.setState({
            categorias : categorias.data.genres
        }) 
    }

    render() { 
        return ( 
            <CategoriasContext.Provider 
                value = {{
                    categorias : this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
         );
    }
}
 
export default CategoriasProvider;
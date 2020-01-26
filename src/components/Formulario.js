import React, { Component } from 'react';

import { CategoriasConsumer } from '../context/CategoriasContext';
import { PeliculasConsumer } from '../context/PeliculasContext';

class Formulario extends Component {
    state = { 
        nombre : '',
        categoria : ''
     }

    // si el usuario agrega una categoria
    
    obtenerDatosCategoria = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    render() { 
        return ( 

            <PeliculasConsumer>

                {(value)=> {
            
                    return (
                            <form
                            onSubmit={e=>{
                                e.preventDefault();

                                value.obtenerPeliculas(this.state);
                            }}
                            
                            >
                                <fieldset className="uk-fieldset uk-margin">
                                    <legend className="uk-legend uk-text-center">
                                        Busca la pelicula por nombre o categoria.
                                    </legend>
                                </fieldset>

                                <div className="uk-column-1-3@m uk-margin">
                                    <div className="uk-margin" uk-margin="true">
                                        <input
                                            name="nombre"
                                            className="uk-input"
                                            type="text"
                                            placeholder="Nombre de la pelicula"
                                            onChange={this.obtenerDatosCategoria} 
                                        />
                                    </div>

                                    <div className="uk-margin" uk-margin="true">
                                        <select
                                            className="uk-select"
                                            name="categoria"
                                            onChange={this.obtenerDatosCategoria}
                                        >
                                            <option value="">--Seleccione un genero--</option>

                                            <CategoriasConsumer>
                                                {(value) => {
                                                    return (
                                                        value.categorias.map(categoria => (
                                                            <option key = {categoria.id} value={categoria.id}
                                                            data-uk-form-select>
                                                                {categoria.name}
                                                            </option>
                                                        ))
                                                    )
                                                }}
                                            </CategoriasConsumer>

                                        </select>
                                    </div>

                                    <div>
                                        <input type="submit" className="uk-button uk-button-danger" value ="Buscar Peliculas" />
                                    </div>

                                </div>
                            </form>
                )
            }}
            </PeliculasConsumer>
         );
    }
}
 
export default Formulario;
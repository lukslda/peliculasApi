import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaPeliculas from "./components/ListaPeliculas";

import CategoriasProvider from './context/CategoriasContext';
import PeliculasProvider from './context/PeliculasContext';


function App() {
  return (

    <PeliculasProvider>
      <CategoriasProvider>
        <Header />

        <div className="uk-container">
          <Formulario />

          <ListaPeliculas />
        </div>

      </CategoriasProvider>
    </PeliculasProvider>
  );
}

export default App;


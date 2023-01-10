import { createContext, useState, useContext } from 'react';

export const FavoritoContext = createContext();

export const FavoritoContextProvider = ({children}) => {

    const [favoritos, setFavoritos] = useState([]);

    return(
        <FavoritoContext.Provider value={{favoritos, setFavoritos}}>
            {children}
        </FavoritoContext.Provider>
    )
}

export const useFavoriteContext = () => {
    const {favoritos, setFavoritos} = useContext(FavoritoContext);

    const adicionaFavorito = (novoFavorito) => {
        const favoritoRepetido = favoritos.some(favorito => favorito.id === novoFavorito.id);

        let novaLista = [...favoritos];
        if(!favoritoRepetido){
            novaLista.push(novoFavorito);
            return setFavoritos(novaLista)
        }

        return setFavoritos(novaLista.filter(favorito => favorito.id !== novoFavorito.id))
    }
    return{
        favoritos, adicionaFavorito
    }
}
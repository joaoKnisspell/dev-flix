// import { useContext } from 'react';
// import { FavoritoContext } from 'contexts/FavoritoContext';

// export const useFavoriteContext = () => {
//     const { favoritos, setFavoritos } = useContext(FavoritoContext);

//     const adicionaFavorito = (novoFavorito) => {
//         const favoritoRepetido = favoritos.some(favorito => favorito.id === novoFavorito.id);
//         let novaLista = [...favoritos];

//         if(!favoritoRepetido){
//             novaLista.push();
//             return setFavoritos(novaLista)
//         }

//         return setFavoritos(novaLista.filter(favorito => favorito.id !== novoFavorito.id))
//     }

//     return{
//         favoritos, adicionaFavorito
//     }
// }
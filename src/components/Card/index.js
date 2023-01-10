import { CardContainer } from "./style";
import { HiOutlineHeart } from 'react-icons/hi';
import { HiHeart } from 'react-icons/hi';
import { Link } from "react-router-dom";
import { useFavoriteContext } from "contexts/FavoritoContext";


const Card = ( { id, capa, title, category } ) => {

  const {favoritos, adicionaFavorito} = useFavoriteContext();
  const ehFavorito = favoritos.some(favorito => favorito.id === id);

  return (
    <CardContainer>
      <Link to={`/video/${id}`}>
        <img src={capa} alt={title} />
      </Link>
        <div className="card-text">
            <h3>{title}</h3>
            <div className="favorite">
                <p>Categoria: {category}</p>
                {!ehFavorito ? 
                <HiOutlineHeart size={25} onClick={() => adicionaFavorito({id, capa, title, category})}/>
                : <HiHeart size={25} onClick={() => adicionaFavorito({id, capa, title, category})}/>
              }
                
            </div>
        </div>
    </CardContainer>
  )
}

export default Card
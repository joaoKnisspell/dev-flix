import { Title } from 'components/Title'
import Banner from 'components/Banner'
import { CardsContainer } from 'components/CardsContainer'
import Card from 'components/Card'
import { useFavoriteContext } from 'contexts/FavoritoContext'
import { Container } from 'components/Container'

const Favorites = () => {

  const {favoritos} = useFavoriteContext();

  return (
    <div>
        <Banner pageName="favorites"/>
        <Container>
          <Title>Meus Favoritos</Title>
          <CardsContainer>
            {favoritos.map(favorito => (
              <Card key={favorito.id} {...favorito} />
            ))}
          </CardsContainer>
        </Container>
    </div>
  )
}

export default Favorites
import { Title } from "components/Title";
import { Container } from "components/Container";
import Card from "../../components/Card";
import { CardsContainer } from "components/CardsContainer";
import { useState, useEffect } from "react";


const Home = () => {

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/joaoKnisspell/dev-flix-api/videos')
      .then(response => response.json())
      .then(data => setVideos(data))
  }, [])

  return (
    <>
        <Container>
          <Title>Maior e melhor conteúdo para você aprender a programar!</Title>
          <CardsContainer>
            {videos.map(video => (
              <Card key={video.id} {...video} />
            ))}
          </CardsContainer>
        </Container>
    </>
  )
}

export default Home
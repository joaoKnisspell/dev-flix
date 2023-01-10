import { Title } from 'components/Title';
import { useParams } from 'react-router-dom';
import { Container } from 'components/Container';
import PaginaNaoEncontrada from 'pages/PaginaNaoEncontrada';
import { useState, useEffect } from 'react';

const Video = () => {

    const [video, setVideo] = useState();
    const parametros = useParams();

    useEffect(() => {
      fetch(`https://my-json-server.typicode.com/joaoKnisspell/dev-flix-api/videos?id=${parametros.id}`)
      .then(response => response.json())
      .then(data => setVideo(...data))
    }, [])

    if(!video){
      return <PaginaNaoEncontrada />
    }

  return (
    <>
      <Container key={video.id}>
        <Title>{video.title}</Title>
          <iframe className='iframe' src={video.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          
      </Container>
    </>
  )
}

export default Video
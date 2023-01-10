import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import PaginaPadrao from 'pages/PaginaPadrao';
import Home from './pages/Home';
import Favorites from 'pages/Favorites';
import Video from 'pages/VideoPage';
import PaginaNaoEncontrada from 'pages/PaginaNaoEncontrada';

//https://my-json-server.typicode.com/joaoKnisspell/dev-flix-api/videos


function AppRoutes() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PaginaPadrao />} >
              <Route index element={<Home />} />
              <Route path='favorites' element={<Favorites />} />
              <Route path='video/:id' element={<Video />} />
              <Route path='*' element={<PaginaNaoEncontrada />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default AppRoutes;

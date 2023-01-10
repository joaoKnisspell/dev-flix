import { Footer } from 'components/Footer';
import Navbar from 'components/Navbar';
import { Outlet } from 'react-router-dom';

const PaginaPadrao = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer>©Desenvolvido por João Knisspell.</Footer>
    </>
  )
}

export default PaginaPadrao
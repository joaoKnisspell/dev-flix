import { BannerContainer } from "./style"

const Banner = ({ pageName }) => {
  return (
    <BannerContainer style={{backgroundImage:`url('/img/banner-${pageName}.png')`}}></BannerContainer>
  )
}

export default Banner
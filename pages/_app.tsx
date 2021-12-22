import App, {AppContext, AppProps, AppInitialProps} from 'next/app'
import GlobalStyle from '../styles/GlobalStyle'
import Header from '../components//Header'
import Footer from '../components/Footer'
import {wrapper} from '../store'
const app = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default wrapper.withRedux(app)
//wrapper를 이용하여 redux 스토어를 컴포넌트에 전달할수 있게 되었다.
import { Provider } from 'react-redux';
import '../styles/globals.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import store from '../redux/store';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  
}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}



function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>




  )
}

export default MyApp

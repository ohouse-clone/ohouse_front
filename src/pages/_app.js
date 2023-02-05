import '/styles/globals.css';
import '/styles/style.css';
// import Layout from 'components/layout';
import Layout from '../components/Layout';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "NanumSquareNeo-Variable";
  }
  *{
    font-family: "NanumSquareNeo-Variable";

  }
  @font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
}
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function MyApp({ Component, pageProps }) {
  return (pageProps && pageProps.pathname) === '/login' ||
    (pageProps && pageProps.pathname) === '/register' ||
    (pageProps && pageProps.pathname) === '/writing' ? (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  ) : (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

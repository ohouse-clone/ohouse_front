import '/styles/globals.css';
import '/styles/style.css';
import Layout from 'components/layout';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';


const GlobalStyle = createGlobalStyle`
${reset}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function MyApp({ Component, pageProps }) {


  return (pageProps && pageProps.pathname) === '/Login' ||
    (pageProps && pageProps.pathname) === '/Register' ? (
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

import '/styles/globals.css';
import '/styles/style.css';
// import Layout from 'components/layout';
import Layout from '../components/Layout';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { RecoilRoot } from 'recoil';

const GlobalStyle = createGlobalStyle`
${reset}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // font-family: "SanFrancisco";
    
  }
  @font-face {
    font-family: "SanFrancisco";
    font-weight: 400;
    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
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
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ThemeProvider>
    </>
  ) : (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </Layout>
      </ThemeProvider>
    </>
  );
}

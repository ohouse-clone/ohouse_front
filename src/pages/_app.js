import '/styles/globals.css';
import '/styles/style.css';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { RecoilRoot } from 'recoil';
import Layout from 'components/Layout';

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

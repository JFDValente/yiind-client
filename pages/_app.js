import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { storeWrapper } from "../store";
import reset from 'styled-reset';
import styledNormalize from 'styled-normalize';

import baseTheme from '../theme';

const GlobalStyle = createGlobalStyle`
	${reset}
	${styledNormalize}
  body {
    font-family: 'Roboto', 'sans-serif';
    background-color: #000000;
    color: #FFFFFF;
    width: calc(100vw - 32px);
	}
`;

function MainApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={baseTheme}>
      <>
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    </ThemeProvider>
  )
}

export default storeWrapper.withRedux(MainApp);

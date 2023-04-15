import "@/styles/globals.css";
import { Providers } from "@/redux/provider";
import { baseTheme } from "@/theme/base-theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={baseTheme}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ThemeProvider>
  );
}

export default App;

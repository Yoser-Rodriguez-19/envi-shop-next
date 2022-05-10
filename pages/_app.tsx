import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from '../themes';
import { UiProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig 
      value={{
        // refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json()) // colocamos este fetcher global
      }}
    >
      <UiProvider>
        <ThemeProvider theme={ lightTheme }>
          
          <CssBaseline /> {/*  propio de material */}
          
          <Component {...pageProps} />
        </ThemeProvider>
      </UiProvider>
    </SWRConfig>
  )
}

export default MyApp

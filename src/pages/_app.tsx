import { ChakraProvider, Container } from "@chakra-ui/react"
import Script from 'next/script'
import type { AppProps } from 'next/app'
import { theme } from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DFCXV9DC6R" />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}
export default MyApp

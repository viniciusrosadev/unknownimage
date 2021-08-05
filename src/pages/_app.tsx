import { ChakraProvider, Container } from "@chakra-ui/react"
import type { AppProps } from 'next/app'
import { theme } from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}
export default MyApp

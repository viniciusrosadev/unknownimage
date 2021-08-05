import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    fonts: {
        body: 'Lato',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.700',
                color: 'white',
                fontSize: '1.2rem'
            }
        }
    }
})

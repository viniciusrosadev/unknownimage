import { Button, HStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaTwitch, FaWhatsapp, FaLinkedin, FaDownload } from 'react-icons/fa'

interface IShareButton {
    colorScheme: string
}

export function ShareButton({ colorScheme = 'red' }: IShareButton) {
    return (
            <HStack>
                <Button colorScheme={colorScheme}>
                    <Icon as={FaFacebook} />
                </Button>
                <Button colorScheme={colorScheme}>
                    <Icon as={FaTwitter} />
                </Button>
                <Button colorScheme={colorScheme}>
                    <Icon as={FaTwitch} />
                </Button>
                <Button colorScheme={colorScheme}>
                    <Icon as={FaWhatsapp} />
                </Button>
                <Button colorScheme={colorScheme}>
                    <Icon as={FaLinkedin} />
                </Button>
                <Button colorScheme={colorScheme}>
                    <Icon as={FaDownload} />
                </Button>
            </HStack>
    )
}

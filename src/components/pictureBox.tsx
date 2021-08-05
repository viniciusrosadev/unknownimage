import { Box, Img } from '@chakra-ui/react'

interface PictureInformation {
    imgUrl: string;
    altDescription: string
    createdAt: string;
}

interface IPictureBox {
    image: PictureInformation
}

export function PictureBox({ image }: IPictureBox) {
    return (
        <Box boxSize="180px">
            <Img w="max" h="36" objectFit="cover" borderRadius="full" src={image.imgUrl} alt={image.altDescription} />
        </Box>
    )
}
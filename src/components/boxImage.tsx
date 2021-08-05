import { Box, Img } from '@chakra-ui/react'

interface ImageInformation {
    imgUrl: string;
    altDescription: string
    provider?: 'Pexels' | 'Unsplash' | 'Other'
    createdAt: string;
}

interface IBoxImage {
    image: ImageInformation
}

export function BoxImage({ image }: IBoxImage) {
    return (
        <Box boxSize="180px">
            <Img w="max" h="36" objectFit="cover" borderRadius="full" src={image.imgUrl} alt={image.altDescription} />
        </Box>
    )
}
import { Badge, Box, Image } from '@chakra-ui/react'

interface ImageInformation {
    imgUrl: string;
    altDescription: string
    provider: 'Pexels' | 'Unsplash' | 'Other'
    createdAt: string;
}

interface IBoxImage {
    image: ImageInformation
}

export function BoxImage({ image }: IBoxImage) {
    return (
        <Box>
            <Image boxSize="200px" borderRadius="md" src={image.imgUrl} alt={image.altDescription} />
        </Box>
    )
}
import { Box, Img } from '@chakra-ui/react'
import Link from 'next/link'

interface PictureInformation {
    id: string | number;
    imgUrl: string;
    altDescription: string
    createdAt: string;
    provider: 'Unsplash' | 'Other'
}

interface IPictureBox {
    image: PictureInformation
}

export function PictureBox({ image }: IPictureBox) {
    let providerId;

    if (image.provider) {
        providerId = 1;
    }

    return (
        <Link href={`/picture/${image.id}-${providerId}`} passHref>
            <Box as="a" boxSize="180px">
                <Img w="max" h="36" objectFit="cover" borderRadius="full" src={image.imgUrl} alt={image.altDescription} />
            </Box>
        </Link>
    )
}
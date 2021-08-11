import { Flex, Text, SimpleGrid, Box, HStack, Img } from '@chakra-ui/react'
import { Search } from '../../components/search'
import { ShareButton } from '../../components/shareButton'
import { apiUnsplash } from '../../services/api'

interface IUnkownImage {
    params: {
        unkownimage: string
    }
}

interface IImage {
    image: PictureInformation
}

type PictureInformation = {
    id: string;
    created_at: string;
    description: string;
    alt_description: string;
    width: number;
    height: number;
    location?: {
        city: string;
        country: string;
    }
    urls: {
        full: string;
        regular: string;
    }
    links: {
        download: string;
    }
}

export default function UnkownImage({ image }: IImage) {
    return (
        <>
            <Search />

            <Flex mt="4">
                <Text color="red.500">
                {image.description ?? 'Image from Unsplash'}
                </Text>
            </Flex>

            <Flex align="baseline" justify="center">
                <Box padding="1">
                    <Img borderRadius="sm" src={image.urls.regular} alt={image.alt_description}/>
                </Box>
            </Flex>

            <Flex justify="flex-end" padding="2">
                <ShareButton colorScheme="red" />
            </Flex>

            <SimpleGrid columns={2} columnGap="sm">

                <HStack>
                    <Text>
                        {image.description ?? 'Image from Unsplash'}
                    </Text>
                </HStack>

                <HStack borderLeft="1px">
                    <Box ml="4">
                        <Text>Author</Text>
                    </Box>
                </HStack>
            </SimpleGrid>
        </>
    )
}

// The fallback generate new pages in build time
export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export async function getStaticProps({ params }: IUnkownImage) {
    const pictureId = params.unkownimage[0].slice(0,-2)

    const picFromUnsplash = await apiUnsplash.get(`/photos/${pictureId}`).then(response => response.data)

    const picture: PictureInformation = {
        id: picFromUnsplash.id,
        width: picFromUnsplash.width,
        height: picFromUnsplash.height,
        description: picFromUnsplash.description,
        alt_description: picFromUnsplash.alt_description,
        created_at: picFromUnsplash.created_at,
        urls: {
            full: picFromUnsplash.urls.full,
            regular: picFromUnsplash.urls.regular
        },
        links: {
            download: picFromUnsplash.links.download
        }
    }

    return {
        props: {
            image: picture
        },
        revalidate: 86400,
    }
}

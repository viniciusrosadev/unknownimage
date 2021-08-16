import { Flex, Text, SimpleGrid, Box, Stack, HStack, Img } from '@chakra-ui/react'
import { GetStaticPaths } from 'next'
import Link from 'next/link'
import { Search } from '../../components/search'
import { ShareButton } from '../../components/shareButton'
import { apiUnsplash } from '../../services/api'

interface IReqParams {
    params: {
        unknown: string
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
    user: {
        name: string;
    }
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
        html: string;
    }
    provider: string;
}

export default function Unknown({ image }: IImage) {
    return (
        <>
            <Search />
            <Flex mt="4" align="baseline" justify="center">
                <Box padding="1">
                    <Img borderRadius="md" src={image.urls.regular} alt={image.alt_description} />
                </Box>
            </Flex>

            <Flex justify="flex-end" padding="2">
                <ShareButton colorScheme="red" linkDownload={image.links.download} />
            </Flex>

            <SimpleGrid mt="2" columns={2} columnGap="sm">

                <Stack>
                    <HStack>
                        <Text color="red.500">
                            Description:
                        </Text>
                    </HStack>
                    <HStack fontSize="md">
                        <Text color="red.200">
                            {image.description ?? 'Image from Unsplash'}
                        </Text>
                    </HStack>
                </Stack>

                <HStack ml="1" borderLeft="1px" borderLeftColor="red.400">
                    <Text pl="2" color="red.500">
                        Author:
                    </Text>
                    <Box ml="4" fontSize="md" color="red.200">
                        <Text>
                            Provider: {image.provider}
                        </Text>
                        <Text>
                            Name: {image.user.name ?? 'Unknown'}
                        </Text>
                        <Link href={image.links.html} passHref prefetch={false}>
                            <Text as="a">
                                Original image
                            </Text>
                        </Link>
                    </Box>
                </HStack>
            </SimpleGrid>
        </>
    )
}

// The fallback generate new pages in build time
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export const getStaticProps = async ({ params }: IReqParams) => {
    const pictureId = String(params.unknown).slice(0, -2)

    const providerImage = 'Unsplash'

    const picFromUnsplash = await apiUnsplash.get(`/photos/${pictureId}`).then(response => response.data)

    const picture: PictureInformation = {
        id: picFromUnsplash.id,
        width: picFromUnsplash.width,
        height: picFromUnsplash.height,
        description: picFromUnsplash.description,
        alt_description: picFromUnsplash.alt_description,
        created_at: picFromUnsplash.created_at,
        user: {
            name: picFromUnsplash.user.name
        },
        urls: {
            full: picFromUnsplash.urls.full,
            regular: picFromUnsplash.urls.regular
        },
        links: {
            download: picFromUnsplash.links.download,
            html: picFromUnsplash.links.html
        },
        provider: providerImage
    }

    return {
        props: {
            image: picture
        },
        revalidate: 604800,
    }
}

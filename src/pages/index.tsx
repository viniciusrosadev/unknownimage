import { GetStaticProps } from 'next'
import { Flex, Text, Badge, Box, Grid, Spinner } from '@chakra-ui/react'
import { BoxImage } from '../components/boxImage'
import { Search } from '../components/search'
import { apiUnsplash } from '../services/api'

type UnsplashImage = {
  id: string;
  created_at: string;
  alt_description: string;
  urls: {
    full: string;
    thumb: string;
  }
}

type ImagesProps = {
  images: UnsplashImage[]
}

export default function Home({ images }: ImagesProps) {
  return (
    <>
      <Flex align="center" justify="center" padding="2">
        <Search />
      </Flex>
      <Box>
        <Flex mt="2">
          <Text color="red.500">
            Various images
            <Badge ml="2" color="black" colorScheme="red">
              New
            </Badge>
          </Text>
        </Flex>
        <Grid mt="6" templateColumns="repeat(4, 1fr)" gap={6}>
          {images.flatMap((image) => {
            return <BoxImage key={image.id} image={{ provider: 'Unsplash', altDescription: image.alt_description, createdAt: image.created_at, imgUrl: image.urls.thumb }} />
          })}
        </Grid>
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const dataImages = await apiUnsplash.get('/photos/random?orientation=landscape&count=12').then(response => response.data)
  return {
    props: {
      images: dataImages
    },
    revalidate: 1000 * 90
  }
}

import { GetStaticProps } from 'next'
import { Flex, Text, Badge, Box, Grid } from '@chakra-ui/react'
import { PictureBox } from '../components/pictureBox'
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
      <Search />
      <Box>
        <Flex mt="4">
          <Text color="red.500">
            Suggested images
            <Badge ml="2" color="black" colorScheme="red">
              New
            </Badge>
          </Text>
        </Flex>
        <Grid mt="8" templateColumns="repeat(5, 1fr)">
          {images.flatMap((image) => {
            return <PictureBox key={image.id} image={{id:image.id, provider: 'Unsplash', altDescription: image.alt_description, createdAt: image.created_at, imgUrl: image.urls.thumb }} />
          })}
        </Grid>
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const dataImages = await apiUnsplash.get('/photos/random?orientation=landscape&count=20').then(response => response.data)
  return {
    props: {
      images: dataImages
    },
    revalidate: 600
  }
}

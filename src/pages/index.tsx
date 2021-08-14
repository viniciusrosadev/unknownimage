import { GetStaticProps } from 'next'
import { Flex, Text, Badge, Box, Grid } from '@chakra-ui/react'
import { PictureBox } from '../components/pictureBox'
import { Search } from '../components/search'
import { apiUnsplash } from '../services/api'
import { useState } from 'react'

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
  const [searchTerm, setSearchTerm] = useState('')
  const [pictureList, setPictureList] = useState<UnsplashImage[]>(images)
  const [page, setPage] = useState(1)

  async function handleSearch(term: { searchText: string }) {
    setSearchTerm(term.searchText)

    const newSearch = await apiUnsplash.get(`/search/photos?page=${page}&query=${term.searchText}&per_page=20&orientation=landscape`).then(response => response.data)
  }

  return (
    <>
      {/* <Search /> */}
      <Box>
        <Flex mt="4">
          <Text color="red.500">
            Suggested images
            <Badge ml="2" color="black" colorScheme="red">
              New
            </Badge>
          </Text>
        </Flex>
        <Grid mt="8" templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]}>
          {pictureList.flatMap((image) => {
            return <PictureBox prefetch={false} key={image.id} image={{ id: image.id, provider: 'Unsplash', altDescription: image.alt_description, createdAt: image.created_at, imgUrl: image.urls.thumb }} />
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
    revalidate: 86400
  }
}
